import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavBarDropDownMenuComponent } from './header-nav-bar-drop-down-menu.component';

describe('HeaderNavBarDropDownMenuComponent', () => {
  let component: HeaderNavBarDropDownMenuComponent;
  let fixture: ComponentFixture<HeaderNavBarDropDownMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNavBarDropDownMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderNavBarDropDownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
