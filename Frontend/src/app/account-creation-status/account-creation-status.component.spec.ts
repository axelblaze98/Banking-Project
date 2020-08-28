import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCreationStatusComponent } from './account-creation-status.component';

describe('AccountCreationStatusComponent', () => {
  let component: AccountCreationStatusComponent;
  let fixture: ComponentFixture<AccountCreationStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCreationStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCreationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
