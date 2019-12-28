import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcdefisComponent } from './parcdefis.component';

describe('ParcdefisComponent', () => {
  let component: ParcdefisComponent;
  let fixture: ComponentFixture<ParcdefisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcdefisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcdefisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
