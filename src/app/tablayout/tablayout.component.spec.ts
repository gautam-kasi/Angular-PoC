import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablayoutComponent } from './tablayout.component';

describe('TablayoutComponent', () => {
  let component: TablayoutComponent;
  let fixture: ComponentFixture<TablayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablayoutComponent]
    });
    fixture = TestBed.createComponent(TablayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
