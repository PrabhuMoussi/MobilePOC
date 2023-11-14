import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListpagePage } from './listpage.page';

describe('ListpagePage', () => {
  let component: ListpagePage;
  let fixture: ComponentFixture<ListpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
