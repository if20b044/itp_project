import { ApiService } from './../_api/api.service';
import { ObjectModel } from './../_models/object-model';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private apiService: ApiService) { }

  ngOnInit(): void {
  }

  delete(data: ObjectModel) {
    this.apiService.callApi('/objects/' + data.id, 'DELETE', {}, (res: any) => {
    }); 
  }

}
