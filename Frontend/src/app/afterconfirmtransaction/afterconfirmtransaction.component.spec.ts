import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterconfirmtransactionComponent } from './afterconfirmtransaction.component';

describe('AfterconfirmtransactionComponent', () => {
  let component: AfterconfirmtransactionComponent;
  let fixture: ComponentFixture<AfterconfirmtransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterconfirmtransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterconfirmtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
