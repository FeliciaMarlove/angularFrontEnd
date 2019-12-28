import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefiDuJourComponent } from './defi-du-jour.component';

describe('DefiDuJourComponent', () => {
  let component: DefiDuJourComponent;
  let fixture: ComponentFixture<DefiDuJourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefiDuJourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefiDuJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
