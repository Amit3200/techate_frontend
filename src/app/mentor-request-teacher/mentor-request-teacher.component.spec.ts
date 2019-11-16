import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorRequestTeacherComponent } from './mentor-request-teacher.component';

describe('MentorRequestTeacherComponent', () => {
  let component: MentorRequestTeacherComponent;
  let fixture: ComponentFixture<MentorRequestTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorRequestTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorRequestTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
