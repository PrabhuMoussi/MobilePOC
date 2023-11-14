import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrcodepagePage } from './qrcodepage.page';

describe('QrcodepagePage', () => {
  let component: QrcodepagePage;
  let fixture: ComponentFixture<QrcodepagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QrcodepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
