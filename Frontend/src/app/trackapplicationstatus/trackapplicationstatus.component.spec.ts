import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackapplicationstatusComponent } from './trackapplicationstatus.component';

describe('TrackapplicationstatusComponent', () => {
  let component: TrackapplicationstatusComponent;
  let fixture: ComponentFixture<TrackapplicationstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackapplicationstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackapplicationstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
