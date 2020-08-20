import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqmainComponent } from './faqmain.component';

describe('FaqmainComponent', () => {
  let component: FaqmainComponent;
  let fixture: ComponentFixture<FaqmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
