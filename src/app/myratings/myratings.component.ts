import { MatDialog } from '@angular/material/dialog';
import { RatingDialogComponent } from './../rating-dialog/rating-dialog.component';
import { RatingsModel } from './../_models/ratings-model';
import { ParserService } from '../_services/parser.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_api/api.service';

@Component({
  selector: 'app-myratings',
  templateUrl: './myratings.component.html',
  styleUrls: ['./myratings.component.css']
})
export class MyratingsComponent implements OnInit {
  objects:RatingsModel[] = []; 

  constructor(
    private apiService: ApiService, 
    private parser: ParserService, 
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getRatingsList();
  } 

  getRatingsList() {
    this.apiService.callApi('/ratings', 'GET', {}, (res: any) => {
      this.objects = res.map((r: any) => this.parser.parseRatingsModel(r));
      this.objects.sort((a,b) => 
        a.objectName.localeCompare(b.objectName));
    }); 
  }

  ratingDialog(data: RatingsModel) {
    this.dialog.open(RatingDialogComponent, {
      disableClose: false,
      height: 'auto',
      width: '400px',
      data: data
    }).afterClosed().subscribe(result => {});
     
  } 
 
}
