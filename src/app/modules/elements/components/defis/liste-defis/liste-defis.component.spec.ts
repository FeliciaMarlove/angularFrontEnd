import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDefisComponent } from './liste-defis.component';

describe('ListeDefisComponent', () => {
  let component: ListeDefisComponent;
  let fixture: ComponentFixture<ListeDefisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDefisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDefisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
