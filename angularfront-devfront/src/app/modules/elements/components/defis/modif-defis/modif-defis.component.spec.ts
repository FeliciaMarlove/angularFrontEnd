import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifDefisComponent } from './modif-defis.component';

describe('ModifDefisComponent', () => {
  let component: ModifDefisComponent;
  let fixture: ComponentFixture<ModifDefisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifDefisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifDefisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
