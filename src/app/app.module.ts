import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';  
import { HttpModule } from '@angular/http';  

import { AppComponent } from './app.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { ListGitProjectsComponent } from './list-git-projects/list-git-projects.component';
import { ListTwittersComponent } from './list-twitters/list-twitters.component';

import { TwitterApiService } from './twitter-api.service';
import { GitApiService } from './git-api.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchboxComponent,
    ListGitProjectsComponent,
    ListTwittersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [TwitterApiService,
              GitApiService
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
