import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomedashboardComponent } from './welcomedashboard.component';

describe('WelcomedashboardComponent', () => {
  let component: WelcomedashboardComponent;
  let fixture: ComponentFixture<WelcomedashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomedashboardComponent]
    });
    fixture = TestBed.createComponent(WelcomedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
