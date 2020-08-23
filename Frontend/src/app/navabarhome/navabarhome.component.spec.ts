import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavabarhomeComponent } from './navabarhome.component';

describe('NavabarhomeComponent', () => {
  let component: NavabarhomeComponent;
  let fixture: ComponentFixture<NavabarhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavabarhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavabarhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
