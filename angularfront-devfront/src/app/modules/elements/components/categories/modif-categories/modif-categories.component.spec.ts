import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifCategoriesComponent } from './modif-categories.component';

describe('ModifCategoriesComponent', () => {
  let component: ModifCategoriesComponent;
  let fixture: ComponentFixture<ModifCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
