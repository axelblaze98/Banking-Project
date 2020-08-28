import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionexpiredComponent } from './sessionexpired.component';

describe('SessionexpiredComponent', () => {
  let component: SessionexpiredComponent;
  let fixture: ComponentFixture<SessionexpiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionexpiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionexpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
