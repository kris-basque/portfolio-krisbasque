import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmzComponent } from './dmz.component';

describe('DmzComponent', () => {
  let component: DmzComponent;
  let fixture: ComponentFixture<DmzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
