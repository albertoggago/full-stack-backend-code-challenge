# Sportdec coding challenge

## Instructions

ALBERTO JOSE GARCIA GAGO

### App . WEB

Created in Angular 4 and node.js

Steps for Run:

1 - npm install // install all dependences of project

2 - ng serve  // for run

3 - ng build  // for create build


### Server

Created in Python 2.7.12

Cause of problems with api twitter, I create a small server in python for get tweets information

You must create before file:
keys.json
with this information:
{
	"consumer_key" : "<consumer key of twitter>",
	"consumer_secret" : "<consumer secret key of twitter>"
}

Run server with:

 python serverTwitter.py 8000 localhost









## Introduction
Welcome to the coding challenge for developers interested in __backend__ roles in Sportdec. It's not an against-the-clock time challenge - you can complete it at home in your own time. 

keys.Ideally you will return your submission in __within 7 days__ - the sooner you get your submission back to us, the more quickly we can progress your application to interview stage.

## The Challenge

1. Create a commandline API mashup of the Github and Twitter APIs

2. Search for "Football" projects on GitHub then, for a chosen subset of these projects, search for tweets mentioning those projects

3. Output the Github summary of each project together with a list of recent tweets

## Instructions

While you're free to choose the technologies you wish to use to complete this challenge, submissions in Node.js, Java, C#, or Go are preferable.

- We expect your submission to be 'production' quality - __we leave it to your own judgement what this might entail__

- Include any instructions required to run your submission in Markdown format

## Deadline

- While there is no specific deadline, we request that you return your submission within 7 days

- We're more interested in how well you approach and complete the challenge, rather than how quickly

## Guidelines

- You will require a Twitter consumer key and secret to complete this challenge 

- Do not include any private details with your submission. We suggest you make any private values such as API keys configurable

- As the Twitter API is rate limited retrieving tweets for a maximum of 10 projects will be sufficient

- Publish your submission to Github as a repo, adding the following Sportdec team members as collaborators:
  - `@dereklawless`
  - `@onlydave`
  - `@esdrasportillo`

## Resources

### GitHub API documentation
- https://developer.github.com/v3/search/#search-repositories

- https://developer.github.com/v3/activity/events/#list-public-events-for-a-network-of-repositories


### Twitter API documentation
- https://dev.twitter.com/oauth/application-only

- https://dev.twitter.com/oauth/overview/application-owner-access-tokens
