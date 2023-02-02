import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectaComponent } from './correcta.component';

describe('CorrectaComponent', () => {
  let component: CorrectaComponent;
  let fixture: ComponentFixture<CorrectaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
