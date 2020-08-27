import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedpasswordComponent } from './updatedpassword.component';

describe('UpdatedpasswordComponent', () => {
  let component: UpdatedpasswordComponent;
  let fixture: ComponentFixture<UpdatedpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
