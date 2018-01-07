import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatouselComponent } from './catousel.component';

describe('CatouselComponent', () => {
  let component: CatouselComponent;
  let fixture: ComponentFixture<CatouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
