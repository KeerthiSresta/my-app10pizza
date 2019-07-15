import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddtoCartComponent } from './product-addto-cart.component';

describe('ProductAddtoCartComponent', () => {
  let component: ProductAddtoCartComponent;
  let fixture: ComponentFixture<ProductAddtoCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAddtoCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddtoCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
