import { Component, } from '@angular/core';
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



}
