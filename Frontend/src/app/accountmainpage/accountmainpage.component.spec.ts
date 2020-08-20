import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountmainpageComponent } from './accountmainpage.component';

describe('AccountmainpageComponent', () => {
  let component: AccountmainpageComponent;
  let fixture: ComponentFixture<AccountmainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountmainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountmainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
