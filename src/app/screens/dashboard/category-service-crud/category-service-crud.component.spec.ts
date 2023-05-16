import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryServiceCrudComponent } from './category-service-crud.component';

describe('CategoryServiceCrudComponent', () => {
  let component: CategoryServiceCrudComponent;
  let fixture: ComponentFixture<CategoryServiceCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryServiceCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryServiceCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
