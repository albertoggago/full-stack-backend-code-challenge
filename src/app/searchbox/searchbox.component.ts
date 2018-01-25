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
maxSearchs: Number = 10; 

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
                gitIndex < this.gitInformation.items.length && gitIndex < 10; gitIndex++)
          {
            console.log("Send twitter");
            this.onFindingTwitter(gitIndex);
          }
        }
        })
  }

  onFindingTwitter(i:number){
    console.log("Send"+i);
    let gitName : string = this.gitInformation.items[i].name; 
    //this.twitterApiService.findingHashtag(gitName)
    //    .subscribe(twitts => {
    //        console.log("Twitter "+i+" "+gitName);
    //        console.log(twitts);
    //      })
    let info = this.twitterApiService.fetchTimeline();
    console.log(info);
    }


}
