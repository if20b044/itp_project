import { WebcamImage } from 'ngx-webcam';
import { Validators, FormControl } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-rating-picture-dialog',
  templateUrl: './rating-picture-dialog.component.html',
  styleUrls: ['./rating-picture-dialog.component.css']
})
export class RatingPictureDialogComponent implements OnInit {
  index = ''; 
  form = ''; 
  object:any; 
  base64String:string = '';
  fileType:string = '';
  status:boolean = false; 

  problemInput = new FormControl('', Validators.required); 

  constructor(
    private dialogRef: MatDialogRef<RatingPictureDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)
   
  { 
    this.index = this.data.index; 
    this.form = this.data.form; 
    this.object = this.data.object; 
  } 

  handleUpload(event:any) {
    const file = event.target.files[0]; 
    const reader = new FileReader(); 

    reader.readAsDataURL(file);
    reader.onload = () => {
      this.fileType = (file.type).split('/')[1]; 
      this.base64String = (<string>reader.result).split(',')[1];
    };

  }

  // Hier weitermachen und dann die Sachen an Parent component weitergeben
  cancel() {
    // closing and sending boolean
    this.dialogRef.close({status: this.status})
  }

  confirm() {
    // after confirming sending data to component
    if (!this.problemInput.hasError('required')) {
      this.status = true; 
      this.dialogRef.close({status: this.status, base64: this.base64String, fileType: this.fileType, message:this.problemInput.value, index: this.index});
    } 
    this.status = false; 
  }

  webcamImage: any = null;

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }

  ngOnInit(): void {}

}
 