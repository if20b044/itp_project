import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ShowPictureDialogComponent } from '../show-picture-dialog/show-picture-dialog.component';

@Component({
  selector: 'app-rating-dialog',
  templateUrl: './rating-dialog.component.html',
  styleUrls: ['./rating-dialog.component.css']
})
export class RatingDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) { console.log("DATA IN DIALOG: ", data) }
  
  showPictureDialog(object:any) {
    console.log("ZWEITES DIALOG: ", object);
    let data: string = 'data:image/' + object.contenttype + ';base64,' + object.attachment; 
    const dialogRef = this.dialog.open(ShowPictureDialogComponent, {
      height: 'auto', 
      width: 'auto', 
      data: data
    });
  }
  ngOnInit(): void {
  }
 
} 
 