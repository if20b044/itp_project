import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-picture-dialog',
  templateUrl: './show-picture-dialog.component.html',
  styleUrls: ['./show-picture-dialog.component.css']
})
export class ShowPictureDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { console.log(data) }

  ngOnInit(): void {
  }

}
 