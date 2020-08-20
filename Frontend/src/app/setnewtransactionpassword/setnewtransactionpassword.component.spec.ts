import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetnewtransactionpasswordComponent } from './setnewtransactionpassword.component';

describe('SetnewtransactionpasswordComponent', () => {
  let component: SetnewtransactionpasswordComponent;
  let fixture: ComponentFixture<SetnewtransactionpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetnewtransactionpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetnewtransactionpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
