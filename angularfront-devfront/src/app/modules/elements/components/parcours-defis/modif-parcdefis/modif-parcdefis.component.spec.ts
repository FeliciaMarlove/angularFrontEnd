import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifParcdefisComponent } from './modif-parcdefis.component';

describe('ModifParcoursDefisComponent', () => {
  let component: ModifParcdefisComponent;
  let fixture: ComponentFixture<ModifParcdefisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifParcdefisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifParcdefisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
