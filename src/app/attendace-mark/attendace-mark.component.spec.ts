import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendaceMarkComponent } from './attendace-mark.component';

describe('AttendaceMarkComponent', () => {
  let component: AttendaceMarkComponent;
  let fixture: ComponentFixture<AttendaceMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendaceMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendaceMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
