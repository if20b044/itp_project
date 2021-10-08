import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContactAndQuestionDialogComponent } from './edit-contact-and-question-dialog.component';

describe('EditContactAndQuestionDialogComponent', () => {
  let component: EditContactAndQuestionDialogComponent;
  let fixture: ComponentFixture<EditContactAndQuestionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditContactAndQuestionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContactAndQuestionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
