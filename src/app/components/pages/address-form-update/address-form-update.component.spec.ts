import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFormUpdateComponent } from './address-form-update.component';

describe('AddressFormUpdateComponent', () => {
  let component: AddressFormUpdateComponent;
  let fixture: ComponentFixture<AddressFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressFormUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
