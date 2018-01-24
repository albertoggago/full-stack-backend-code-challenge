import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; 
import { SearchboxComponent } from './searchbox.component';
import { GitApiService } from '../git-api.service';
import { HttpClientModule } from '@angular/common/http';  
import { ListGitProjectsComponent } from '../list-git-projects/list-git-projects.component';
import { ListTwittersComponent } from '../list-twitters/list-twitters.component';

describe('SearchboxComponent', () => {
  let component: SearchboxComponent;
  let fixture: ComponentFixture<SearchboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchboxComponent,
        ListGitProjectsComponent,
        ListTwittersComponent
       ],
      imports:[FormsModule,HttpClientModule],
      providers:[GitApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have ListGitProjectsComponent', async(() => {
    const fixture = TestBed.createComponent(SearchboxComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-list-git-projects').textContent).toBeDefined();
  }));

});


