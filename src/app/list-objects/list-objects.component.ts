import { SnackbarService } from './../_services/snackbar.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { ObjectsService } from '../_services/objects.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../_api/api.service';
import { ObjectModel } from '../_models/object-model';
import { ParserService } from '../parser.service';

@Component({
  selector: 'list-objects',
  templateUrl: './list-objects.component.html',
  styleUrls: ['./list-objects.component.css']
})
export class ListObjectsComponent implements OnInit {
  objects: ObjectModel[] = []; // Alle GET Daten aus der Datenbank werden hier gespeichert. 

  constructor(
    private dialog: MatDialog,
    private apiService: ApiService, 
    private parser: ParserService,
    private snackbar: SnackbarService
   ) { }

  getObjectList() {
    this.apiService.callApi('/objects', 'GET', {}, (res: any) => {
      
      this.objects = res.map((r: any) => this.parser.parseObject(r));
      console.log("LISTE: ", this.objects)
       
    }); 
  }

  ngOnInit() {
    this.getObjectList(); 
  }

  deleteDialog(data:ObjectModel) {
    this.dialog.open(DeleteDialogComponent, {
      disableClose: true,
      height: 'auto',
      width: 'auto',
      data: data
    }).afterClosed().subscribe(result => {
      if (result == "true") {
        this.snackbar.deleteSnackbar()
        this.getObjectList(); 
      }
    });
  } 

}