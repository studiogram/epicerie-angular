import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddFormComponent } from './product-add-form.component';

describe('ProductAddFormComponent', () => {
  let component: ProductAddFormComponent;
  let fixture: ComponentFixture<ProductAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAddFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
