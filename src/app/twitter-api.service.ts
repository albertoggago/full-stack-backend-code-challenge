import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import {TwitterInformation} from './interfaces/twitter-information.interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', })
};


@Injectable()
export class TwitterApiService {

  private Path: String = "https://api.twitter.com/1.1/search/tweets.json?q=";
  private PathAuth: String = "https://api.twitter.com/oauth2/token";
  
  constructor(  	 
  	private http: HttpClient
    ) { }

  findingHashtag(gitName:string): Observable<TwitterInformation>{
 	  const url = this.Path+gitName+"&result_type=recent";
	   return this.http.get<TwitterInformation>(url)
    		.pipe(
          		tap( output => console.log("getAllTwitts")),
        		catchError(this.handleError('Error buscando correos valor ${valor}',[]))
    		);
  }

  getBid(gitName:string): Observable<TwitterInformation>{
    const url = this.Path+gitName+"&result_type=recent";
     return this.http.get<TwitterInformation>(url)
        .pipe(
              tap( output => console.log("getAllTwitts")),
            catchError(this.handleError('Error buscando correos valor ${valor}',[]))
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

