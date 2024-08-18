import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSearchDropDownIconLoginComponent } from './header-search-drop-down-icon-login.component';

describe('HeaderSearchDropDownIconLoginComponent', () => {
  let component: HeaderSearchDropDownIconLoginComponent;
  let fixture: ComponentFixture<HeaderSearchDropDownIconLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSearchDropDownIconLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSearchDropDownIconLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
