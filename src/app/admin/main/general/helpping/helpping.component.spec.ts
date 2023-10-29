import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelppingComponent } from './helpping.component';

describe('HelppingComponent', () => {
  let component: HelppingComponent;
  let fixture: ComponentFixture<HelppingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelppingComponent]
    });
    fixture = TestBed.createComponent(HelppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
