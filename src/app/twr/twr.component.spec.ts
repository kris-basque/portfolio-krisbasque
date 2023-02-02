import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwrComponent } from './twr.component';

describe('TwrComponent', () => {
  let component: TwrComponent;
  let fixture: ComponentFixture<TwrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
