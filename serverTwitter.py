from BaseHTTPServer import BaseHTTPRequestHandler,HTTPServer
from SocketServer import ThreadingMixIn
import threading
import argparse
import re
import cgi
import tweepy
import json


MAX_TWEETS = 30

class LocalData(object):
  records = {}


class Param:
  consumer_key = None
  consumer_secret = None
  
  def __init__(self):
    json_dataKeys=open("keys.json").read()
    dataKeys = json.loads(json_dataKeys)
    self.consumer_key = dataKeys["consumer_key"]
    self.consumer_secret = dataKeys["consumer_secret"]  

class Tweepy:

  apiTwitter = None
	 
  def __init__(self):
      param = Param()
      auth = tweepy.OAuthHandler(param.consumer_key,param.consumer_secret)
      self.apiTwitter = tweepy.API(auth, parser=tweepy.parsers.JSONParser())

  def accessTwitterName(self, name):
    tweetsJSON = self.apiTwitter.search(q=name, count=MAX_TWEETS)
    return tweetsJSON["statuses"] if "statuses" in tweetsJSON.keys() else None

class HTTPRequestHandler(BaseHTTPRequestHandler):
 
  apitweepy = None

  def do_GET(self):
    if None != re.search('/api/v1/gettweetsname/*', self.path):
      name = self.path.split('/')[-1]
      allTweets = self.apitweepy.accessTwitterName(name)
      if len(allTweets) != None :
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(allTweets))
      else:
        self.send_response(400, 'Bad Request: record does not exist')
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
    else:
      self.send_response(403)
      self.send_header('Content-Type', 'application/json')
      self.send_header('Access-Control-Allow-Origin', '*')
      self.end_headers()
    return
 
class ThreadedHTTPServer(ThreadingMixIn, HTTPServer):
  allow_reuse_address = True
 
  def shutdown(self):
    self.socket.close()
    HTTPServer.shutdown(self)
 
class SimpleHttpServer():
  def __init__(self, ip, port):
    apitweepy = Tweepy()
    HTTPRequestHandler.apitweepy = apitweepy
    self.server = ThreadedHTTPServer((ip,port), HTTPRequestHandler)

 
  def start(self):

	self.server_thread = threading.Thread(target=self.server.serve_forever)
	self.server_thread.daemon = True
	self.server_thread.start()
 
  def waitForThread(self):
    self.server_thread.join()
 
  def addRecord(self, recordID, jsonEncodedRecord):
    LocalData.records[recordID] = jsonEncodedRecord
 
  def stop(self):
    self.server.shutdown()
    self.waitForThread()
 
if __name__=='__main__':
  parser = argparse.ArgumentParser(description='HTTP Server')
  parser.add_argument('port', type=int, help='Listening port for HTTP Server')
  parser.add_argument('ip', help='HTTP Server IP')
  args = parser.parse_args()
 
  server = SimpleHttpServer(args.ip, args.port)
  print 'HTTP Server Running...........'
  server.start()
  server.waitForThread()