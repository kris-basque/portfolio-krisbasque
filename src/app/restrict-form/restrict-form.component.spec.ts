import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictFormComponent } from './restrict-form.component';

describe('RestrictFormComponent', () => {
  let component: RestrictFormComponent;
  let fixture: ComponentFixture<RestrictFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrictFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
