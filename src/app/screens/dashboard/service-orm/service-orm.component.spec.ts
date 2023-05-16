import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOrmComponent } from './service-orm.component';

describe('ServiceOrmComponent', () => {
  let component: ServiceOrmComponent;
  let fixture: ComponentFixture<ServiceOrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceOrmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceOrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
