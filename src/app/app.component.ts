import { Component, OnInit } from '@angular/core';
import { TwitterApiService } from './twitter-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Full Stack Backend Code Challenge';
  user = 'Alberto José García Gago';

  constructor(
    private twitterApiService: TwitterApiService
  	) { }


 ngOnInit() {
 	this.startSignInFlow();
  }


  startSignInFlow():void{
    let tempStr:string;
    let self = this;
    this.twitterApiService.onSignIn().then(function (response) {
      tempStr = response["_body"];
      let a = tempStr.indexOf("&");
      let token = tempStr.substr(0,a);
      window.location.href = "https://api.twitter.com/oauth/authenticate?"+token;
    });
  }

}
