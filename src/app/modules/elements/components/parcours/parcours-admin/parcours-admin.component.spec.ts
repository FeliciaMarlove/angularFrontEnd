import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoursAdminComponent } from './parcours-admin.component';

describe('ParcoursAdminComponent', () => {
  let component: ParcoursAdminComponent;
  let fixture: ComponentFixture<ParcoursAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcoursAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcoursAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
