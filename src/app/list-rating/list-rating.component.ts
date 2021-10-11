import { ObjectModel } from './../_models/object-model';
import { ApiService } from './../_api/api.service';
import { MoreInfoDialogComponent } from './../more-info-dialog/more-info-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ObjectsService } from '../_services/objects.service';
import { ParserService } from '../parser.service';

@Component({
  selector: 'app-list-rating',
  templateUrl: './list-rating.component.html',
  styleUrls: ['./list-rating.component.css']
})
export class ListRatingComponent implements OnInit {

  objects:ObjectModel[] = [] // Alle GET Daten aus der Datenbank werden hier gespeichert. 

  constructor(
    private dialog: MatDialog, 
    private apiService: ApiService,
    private parser: ParserService
    ) { }

    getObjectList() {
      this.apiService.callApi('/objects', 'GET', {}, (res: any) => {
        console.log(res);
        this.objects = res.map((r: any) => this.parser.parseObject(r))
         
      }); 
    }

  moreInfoDialog(data:any) {
    this.dialog.open(MoreInfoDialogComponent, {
      disableClose: false,
      height: 'auto',
      width: 'auto',
      data: data
    }).afterClosed().subscribe(result => {
      if (result == "true") console.log(result); 
    });
  }
 
  ngOnInit() {
   this.getObjectList();
  }
}
