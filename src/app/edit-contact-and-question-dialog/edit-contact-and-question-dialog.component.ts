import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-contact-and-question-dialog',
  templateUrl: './edit-contact-and-question-dialog.component.html',
  styleUrls: ['./edit-contact-and-question-dialog.component.css']
})
export class EditContactAndQuestionDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditContactAndQuestionDialogComponent>) {} 


  frage = new FormControl(this.data.question, Validators.required);
  mail = new FormControl(this.data.contact, Validators.email); 

  editForm = new FormGroup({
    question: this.frage,
    contact: this.mail
  })

  cancel() {
    this.dialogRef.close({'status': false}); 
  }

  confirm() {
    this.dialogRef.close({'status': true, 'question': this.frage.value, 'contact': this.mail.value})
  }


  ngOnInit(): void {
  }

}
