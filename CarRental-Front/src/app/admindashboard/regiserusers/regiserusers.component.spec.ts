import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiserusersComponent } from './regiserusers.component';

describe('RegiserusersComponent', () => {
  let component: RegiserusersComponent;
  let fixture: ComponentFixture<RegiserusersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegiserusersComponent]
    });
    fixture = TestBed.createComponent(RegiserusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
