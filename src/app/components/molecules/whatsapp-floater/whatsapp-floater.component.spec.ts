import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappFloaterComponent } from './whatsapp-floater.component';

describe('WhatsappFloaterComponent', () => {
  let component: WhatsappFloaterComponent;
  let fixture: ComponentFixture<WhatsappFloaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsappFloaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappFloaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
