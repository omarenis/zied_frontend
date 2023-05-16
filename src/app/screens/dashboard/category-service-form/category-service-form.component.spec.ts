import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryServiceFormComponent } from './category-service-form.component';

describe('CategoryServiceFormComponent', () => {
  let component: CategoryServiceFormComponent;
  let fixture: ComponentFixture<CategoryServiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryServiceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
