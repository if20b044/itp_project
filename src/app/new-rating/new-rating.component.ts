import { SnackbarService } from './../_services/snackbar.service';
import { RatingPictureDialogComponent } from './../rating-picture-dialog/rating-picture-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormArray } from '@angular/forms';
import { ApiService } from './../_api/api.service';
import { ParserService } from './../parser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SingleObjectModel } from '../_models/single-object-model';

@Component({
  selector: 'app-new-rating',
  templateUrl: './new-rating.component.html',
  styleUrls: ['./new-rating.component.css']
})
export class NewRatingComponent implements OnInit {
  objects: any; 
  id: string = ''
  rid: string = ''; 
  sname: string = ''; 
  ratingForm!: FormGroup; 

  constructor(
    private route: ActivatedRoute, 
    private parser: ParserService,
    private apiService: ApiService,
    private dialog: MatDialog,
    private snackbar: SnackbarService,
    private router: Router
    ) 
    {}


  // Die beantworteten Fragen sind ein Objekt welches ein Key == rating hat
  // Objekt['rating'] wird je nach Nein oder Ja Antwort mit 0 und 1 getogglet 
  // Bei onSubmit() wird durchiteriert und die Daten so bearbeitet wie sie die DB haben möchte
  onSubmit() {
    this.rating.controls.forEach((element, index) => {
      let iterator = element as FormGroup; 
      if (iterator.controls.rating == null || iterator.controls.rating == undefined || iterator.controls.rating.value == '1') { 
        this.submitValueCheck(iterator);
      }
    })

    let body = {
      roid: this.ratingForm.get('objectId')?.value,
      rsoid: this.ratingForm.get('subobjectId')?.value,
      rating: JSON.stringify(this.ratingForm.get('rating')?.value)
    }

    this.apiService.callApi('/ratings', 'POST', body, (res: any) => {
    }); 

    this.goToMyRatings();
  }

  submitValueCheck(object:FormGroup) {
    object.setControl('rating', new FormControl(1));
    object.removeControl('comment');
    object.removeControl('attachment');
    object.removeControl('contentType');
  }

  goToMyRatings() {
    this.router.navigate(['myratings']).then((navigated:boolean) => {
      if (navigated) {
        this.snackbar.ratingSnackbar(this.rid); 
      } 
    })
  }

  ngOnInit(): void {
    this.objects = new SingleObjectModel();
    this.id = this.route.snapshot.params['oid'];
    this.rid = this.route.snapshot.params['soid'];
    this.sname = this.route.snapshot.params['sname'];

    this.ratingForm = new FormGroup({
      objectId: new FormControl(this.id),
      subobjectId: new FormControl(this.rid),
      rating: new FormArray([]) ,
    })

    this.getObjectList();
  }

  // Hier werden die Daten aus dem Backend geholt
  // createDynamicallyFormGroups erzeugt im FormArray -> leere Formgroups an Hand der Anzahl der Fragen aus dem Backend -> 
  // über Index können die Fragen immer zu geordnet werden, da dass Array dass man zurückschickt ans BE die Antworten immer in gleicher Reihenfolge braucht 
  // Frage 1 muss immer im Array an 0 Stelle stehen
  getObjectList() {
    this.apiService.callApi('/objects/'+this.id, 'GET', {}, (res: any) => {
      console.log("RESPONSECHECK: ",res);
      this.objects = this.parser.parseSingleObjectModel(res);
      console.log("CHECKTHISOUT: ",this.objects);
      this.createDynamicallyFormGroups(this.objects);
    }); 
  }

  // pusht leere FormGroups ins Array
  createDynamicallyFormGroups(objects:any) {
    objects.questions.forEach((element:any) => {
      element['isAnswered'] = null;
      this.rating.push(new FormGroup({}))
    })
    console.log(objects.questions);
  }

  setRating1(index:any) {
    let ratingArrayFormGroup = this.ratingArrayFormGroup(index); 
    ratingArrayFormGroup.setControl('rating', new FormControl(1)); 
    this.objects.questions[index].isAnswered = true; 
  }

  ratingPictureDialog(index: any, object: any) {
    const dialogRef = this.dialog.open(RatingPictureDialogComponent, {
      autoFocus: true,
      disableClose: false,
      height: 'auto',
      width: 'auto',
      data: {
        index: index, 
        form: this.ratingArrayFormGroup(index),
        object: object
      }
    })
    
    
    dialogRef.afterClosed().subscribe((result:any) => {
      if(result.status) { 
        this.addControlToArray(result.index, result);
        this.objects.questions[index].isAnswered = false; 
      }
    });
  }

  addControlToArray(index:any, object:any) {
    let ratingArrayFormGroup = this.ratingArrayFormGroup(index); 

    ratingArrayFormGroup.setControl('rating', new FormControl(0));
    ratingArrayFormGroup.setControl('comment', new FormControl(object.message));
    ratingArrayFormGroup.setControl('attachment', new FormControl(object.base64));
    ratingArrayFormGroup.setControl('contentType', new FormControl(object.fileType));

  }

  get rating() {
    return this.ratingForm.get('rating') as FormArray; 
  }

  ratingArrayFormGroup(index:any) {
    return this.rating.controls[index] as FormGroup;
  }
  

}
