import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListGitProjectsComponent } from './list-git-projects.component';
import { ListTwittersComponent } from '../list-twitters/list-twitters.component';



describe('ListGitProjectsComponent', () => {
  let component: ListGitProjectsComponent;
  let fixture: ComponentFixture<ListGitProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGitProjectsComponent,ListTwittersComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGitProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
