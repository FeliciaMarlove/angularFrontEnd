import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifParcoursComponent } from './modif-parcours.component';

describe('ModifParcoursComponent', () => {
  let component: ModifParcoursComponent;
  let fixture: ComponentFixture<ModifParcoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifParcoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
