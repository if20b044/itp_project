import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingPictureDialogComponent } from './rating-picture-dialog.component';

describe('RatingPictureDialogComponent', () => {
  let component: RatingPictureDialogComponent;
  let fixture: ComponentFixture<RatingPictureDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingPictureDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingPictureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
