import { SubObjectModel } from './../_models/subobject-model';
import { ApiService } from './../_api/api.service';
import { ParserService } from './../parser.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RatingsService } from '../_services/ratings.service';

@Component({
  selector: 'app-list-rating-object',
  templateUrl: './list-rating-object.component.html',
  styleUrls: ['./list-rating-object.component.css']
})
export class ListRatingObjectComponent implements OnInit {
  objects: SubObjectModel[] = [];
  id:any = '' || null; 

  constructor(
    private parser: ParserService, 
    private route: ActivatedRoute,
    private apiService: ApiService
    ) { }

  ngOnInit(): void {
    this.getSubobjectList();
  }

  getSubobjectList() {
    this.route.paramMap
    .subscribe(params => {
      this.id = params.get('oid'); 
    })

    this.apiService.callApi('/subobjects/'+this.id, 'GET', {}, (res: any) => {
      this.objects = res.map((r: any) => this.parser.parseSubObjectModel(r))
       
    }); 
  }

}
