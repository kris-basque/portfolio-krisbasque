import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetovalecanadaComponent } from './projetovalecanada.component';

describe('ProjetovalecanadaComponent', () => {
  let component: ProjetovalecanadaComponent;
  let fixture: ComponentFixture<ProjetovalecanadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetovalecanadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetovalecanadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
