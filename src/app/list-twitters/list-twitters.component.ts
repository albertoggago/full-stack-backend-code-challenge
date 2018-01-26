import { Component, OnInit, Input } from '@angular/core';
import { TwitterInformation } from '../interfaces/twitter-information.interface';

@Component({
  selector: 'app-list-twitters',
  templateUrl: './list-twitters.component.html',
  styleUrls: ['./list-twitters.component.css']
})
export class ListTwittersComponent implements OnInit {
@Input() tweets: TwitterInformation;

  constructor() { }

  ngOnInit() {
  }

}
