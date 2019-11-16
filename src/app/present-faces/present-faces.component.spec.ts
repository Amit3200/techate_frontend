import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentFacesComponent } from './present-faces.component';

describe('PresentFacesComponent', () => {
  let component: PresentFacesComponent;
  let fixture: ComponentFixture<PresentFacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentFacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentFacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
