import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AacdComponent } from './aacd.component';

describe('AacdComponent', () => {
  let component: AacdComponent;
  let fixture: ComponentFixture<AacdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AacdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AacdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
