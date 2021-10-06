import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewObjectComponent } from './add-new-object.component';

describe('AddNewObjectComponent', () => {
  let component: AddNewObjectComponent;
  let fixture: ComponentFixture<AddNewObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
