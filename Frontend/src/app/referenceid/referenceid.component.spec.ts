import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceidComponent } from './referenceid.component';

describe('ReferenceidComponent', () => {
  let component: ReferenceidComponent;
  let fixture: ComponentFixture<ReferenceidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
