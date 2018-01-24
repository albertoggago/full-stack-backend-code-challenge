import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { SearchboxComponent } from './searchbox/searchbox.component';
import { GitApiService } from './git-api.service';
import { TwitterApiService } from './twitter-api.service';
import { HttpClientModule } from '@angular/common/http';  
import { ListGitProjectsComponent } from './list-git-projects/list-git-projects.component';
import { ListTwittersComponent } from './list-twitters/list-twitters.component';




describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchboxComponent,
        ListGitProjectsComponent,
        ListTwittersComponent        
      ],
      imports:[FormsModule,HttpClientModule],
      providers:[GitApiService,TwitterApiService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Full Stack Backend Code Challenge'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Full Stack Backend Code Challenge');
  }));
  it('should render titlein a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Full Stack Backend Code Challenge');
  }));
  it('should have searchbox', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-searchbox').textContent).toBeDefined();
  }));
});
