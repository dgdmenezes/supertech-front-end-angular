import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavBarFixedMenuComponent } from './header-nav-bar-fixed-menu.component';

describe('HeaderNavBarFixedMenuComponent', () => {
  let component: HeaderNavBarFixedMenuComponent;
  let fixture: ComponentFixture<HeaderNavBarFixedMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNavBarFixedMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderNavBarFixedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
