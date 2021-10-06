import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewratingbuttonComponent } from './newratingbutton.component';

describe('NewratingbuttonComponent', () => {
  let component: NewratingbuttonComponent;
  let fixture: ComponentFixture<NewratingbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewratingbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewratingbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
