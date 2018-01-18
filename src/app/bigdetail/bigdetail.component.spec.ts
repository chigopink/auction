import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigdetailComponent } from './bigdetail.component';

describe('BigdetailComponent', () => {
  let component: BigdetailComponent;
  let fixture: ComponentFixture<BigdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
