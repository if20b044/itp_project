import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRatingObjectComponent } from './list-rating-object.component';

describe('ListRatingObjectComponent', () => {
  let component: ListRatingObjectComponent;
  let fixture: ComponentFixture<ListRatingObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRatingObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRatingObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
