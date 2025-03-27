import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedvehicalsComponent } from './listedvehicals.component';

describe('ListedvehicalsComponent', () => {
  let component: ListedvehicalsComponent;
  let fixture: ComponentFixture<ListedvehicalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListedvehicalsComponent]
    });
    fixture = TestBed.createComponent(ListedvehicalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
