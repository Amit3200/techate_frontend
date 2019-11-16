import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPresentsQRComponent } from './show-presents-qr.component';

describe('ShowPresentsQRComponent', () => {
  let component: ShowPresentsQRComponent;
  let fixture: ComponentFixture<ShowPresentsQRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPresentsQRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPresentsQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
