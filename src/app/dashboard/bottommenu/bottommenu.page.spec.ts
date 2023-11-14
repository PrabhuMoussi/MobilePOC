import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BottommenuPage } from './bottommenu.page';

describe('BottommenuPage', () => {
  let component: BottommenuPage;
  let fixture: ComponentFixture<BottommenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BottommenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
