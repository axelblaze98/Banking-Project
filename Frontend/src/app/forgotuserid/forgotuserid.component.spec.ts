import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotuseridComponent } from './forgotuserid.component';

describe('ForgotuseridComponent', () => {
  let component: ForgotuseridComponent;
  let fixture: ComponentFixture<ForgotuseridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotuseridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotuseridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
