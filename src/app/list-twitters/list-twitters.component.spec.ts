import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTwittersComponent } from './list-twitters.component';

describe('ListTwittersComponent', () => {
  let component: ListTwittersComponent;
  let fixture: ComponentFixture<ListTwittersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTwittersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTwittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
