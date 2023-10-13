import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayOutUserComponent } from './lay-out-user.component';

describe('LayOutUserComponent', () => {
  let component: LayOutUserComponent;
  let fixture: ComponentFixture<LayOutUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayOutUserComponent]
    });
    fixture = TestBed.createComponent(LayOutUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
