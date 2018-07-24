import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrCalcComponent } from './br-calc.component';

describe('BrCalcComponent', () => {
  let component: BrCalcComponent;
  let fixture: ComponentFixture<BrCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
