import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import {TwitterInformation} from './interfaces/twitter-information.interface';
import { TwitterService } from 'ng2-twitter';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class TwitterApiService {
  port = 8000;
  dir = "localhost";
  pathAccess = "/api/v1/gettweetsname"

  private Path: String = "http://"+this.dir+":"+this.port+this.pathAccess+"/";
  
  constructor(     
    private http: HttpClient
    ) { }

  findTweets(referenceName:string): Observable<TwitterInformation>{
   const url = this.Path+referenceName;
  return this.http.get<TwitterInformation>(url)
        .pipe(
              tap( output => console.log("getAllTweets")),
            catchError(this.handleError('Error looking for twits ${valor}',[]))
        );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
     
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}