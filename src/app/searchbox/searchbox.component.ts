import { Component, OnInit } from '@angular/core';
import { GitInformation } from '../interfaces/git-information.interface';
import { GitApiService } from '../git-api.service'
import { TwitterApiService } from '../twitter-api.service'
import { TwitterService } from 'ng2-twitter';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {

searching : string = "";
gitInformation  : GitInformation  ;

  constructor(
  	private gitApiService: GitApiService,
    private twitterApiService: TwitterApiService
  	) { }

  ngOnInit() {
  }

  onSearching() {
  	this.gitApiService.finding(this.searching)
       .subscribe(elementos => {
       	this.gitInformation = elementos;
        //Load data of Twitter
        if (this.gitInformation.items) {
          for( var gitIndex: number = 0;
                gitIndex < this.gitInformation.items.length && gitIndex < 1; gitIndex++)
          {
            this.onFindingTwitter(gitIndex);
          }
        }
        })
  }

  onFindingTwitter(i:number){
    let gitName : string = this.gitInformation.items[i].name; 
    this.twitterApiService.findingHashtag(gitName)
        .subscribe(twitts => {
            console.log("Twitter "+i+" "+gitName);
            console.log(twitts);
          })
      }


}
