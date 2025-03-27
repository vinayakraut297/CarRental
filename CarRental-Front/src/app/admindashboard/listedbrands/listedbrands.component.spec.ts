import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedbrandsComponent } from './listedbrands.component';

describe('ListedbrandsComponent', () => {
  let component: ListedbrandsComponent;
  let fixture: ComponentFixture<ListedbrandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListedbrandsComponent]
    });
    fixture = TestBed.createComponent(ListedbrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
