import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePublicListComponent } from './service-public-list.component';

describe('ServicePublicListComponent', () => {
  let component: ServicePublicListComponent;
  let fixture: ComponentFixture<ServicePublicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicePublicListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePublicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
