import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackhubComponent } from './packhub.component';

describe('PackhubComponent', () => {
  let component: PackhubComponent;
  let fixture: ComponentFixture<PackhubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackhubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
