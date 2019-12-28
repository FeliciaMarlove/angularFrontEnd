import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeParcoursComponent } from './liste-parcours.component';

describe('ListeParcoursComponent', () => {
  let component: ListeParcoursComponent;
  let fixture: ComponentFixture<ListeParcoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeParcoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
