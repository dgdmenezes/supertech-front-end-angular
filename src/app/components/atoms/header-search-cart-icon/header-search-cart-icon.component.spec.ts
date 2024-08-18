import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSearchCartIconComponent } from './header-search-cart-icon.component';

describe('HeaderSearchCartIconComponent', () => {
  let component: HeaderSearchCartIconComponent;
  let fixture: ComponentFixture<HeaderSearchCartIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSearchCartIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSearchCartIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
