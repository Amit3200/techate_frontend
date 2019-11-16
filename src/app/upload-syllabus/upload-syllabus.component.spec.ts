import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSyllabusComponent } from './upload-syllabus.component';

describe('UploadSyllabusComponent', () => {
  let component: UploadSyllabusComponent;
  let fixture: ComponentFixture<UploadSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
