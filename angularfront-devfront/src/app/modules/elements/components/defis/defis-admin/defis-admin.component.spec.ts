import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefisAdminComponent } from './defis-admin.component';

describe('DefisAdminComponent', () => {
  let component: DefisAdminComponent;
  let fixture: ComponentFixture<DefisAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefisAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefisAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
