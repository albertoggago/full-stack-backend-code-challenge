import { Component, OnInit, Input } from '@angular/core';
import { NgForOf } from '@angular/common';

import {GitInformation} from '../interfaces/git-information.interface';

@Component({
  selector: 'app-list-git-projects',
  templateUrl: './list-git-projects.component.html',
  styleUrls: ['./list-git-projects.component.css']
})
export class ListGitProjectsComponent implements OnInit {
@Input() gitInformation: GitInformation;

  constructor() { }

  ngOnInit() {
  }

  showTwitters(){
  	console.log("xxxx");
  }

}
