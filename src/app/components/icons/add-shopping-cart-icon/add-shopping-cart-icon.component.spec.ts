import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShoppingCartIconComponent } from './add-shopping-cart-icon.component';

describe('AddShoppingCartIconComponent', () => {
  let component: AddShoppingCartIconComponent;
  let fixture: ComponentFixture<AddShoppingCartIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShoppingCartIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddShoppingCartIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
