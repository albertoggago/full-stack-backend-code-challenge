import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import {GitInformation} from './interfaces/git-information.interface';
import { TwitterService } from 'ng2-twitter';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class GitApiService {

  private Path: String = "https://api.github.com/search/repositories?q=";
  
  constructor(  	 
  	private http: HttpClient
    ) { }

  findingGits(gitName:string): Observable<GitInformation>{
 	const url = this.Path+gitName+"&sort=stars";
	return this.http.get<GitInformation>(url)
    		.pipe(
          		tap( output => console.log("getAllGit")),
        		catchError(this.handleError('Error looking for gits ${valor}',[]))
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
