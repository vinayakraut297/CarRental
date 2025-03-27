import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalbookingComponent } from './totalbooking.component';

describe('TotalbookingComponent', () => {
  let component: TotalbookingComponent;
  let fixture: ComponentFixture<TotalbookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalbookingComponent]
    });
    fixture = TestBed.createComponent(TotalbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
