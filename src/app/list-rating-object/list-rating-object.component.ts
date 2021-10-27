import { SubObjectModel } from './../_models/subobject-model';
import { ApiService } from './../_api/api.service';
import { ParserService } from '../_services/parser.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RatingsService } from '../_services/ratings.service';

@Component({
  selector: 'app-list-rating-object',
  templateUrl: './list-rating-object.component.html',
  styleUrls: ['./list-rating-object.component.css']
})
export class ListRatingObjectComponent implements OnInit {
  objects: SubObjectModel[] = [];
  id:any = '' || null; 
  objectName: string = ''; 

  constructor(
    private parser: ParserService, 
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getSubobjectList();
    this.getObjectName(); 
  }

  getSubobjectList() {
    this.route.paramMap
    .subscribe(params => {
      this.id = params.get('oid'); 
    })

    this.apiService.callApi('/subobjects/'+this.id, 'GET', {}, (res: any) => {
      this.objects = res.map((r: any) => this.parser.parseSubObjectModel(r));
      if (this.objects.length == 1) this.router.navigate(['/create-new-rating/', this.id ,this.objects[0].sid , this.objects[0].title]); 
    }); 
  }

  getObjectName() {
    let localStorageArray = localStorage.getItem('Objekte'); 
    if (!localStorageArray) return;
    let parsedlocalStorageArray = JSON.parse(localStorageArray); 
    this.objectName = parsedlocalStorageArray.find((x:any) => x.id === this.id).oname; 
  }

}
