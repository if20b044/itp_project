import { EditSubObjectModel } from './../_models/editSubobjectModel';
import { DeleteQuestionComponent } from './../delete-question/delete-question.component';
import { MatDialog } from '@angular/material/dialog';
import { SubObjectModel } from './../_models/subobject-model';
import { SingleObjectModel } from './../_models/single-object-model';
import { AddObjectModel } from './../_models/addObject-model';
import { ActivatedRoute } from '@angular/router';
import { EditObjectModel } from './../_models/edit-object';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { ApiService } from '../_api/api.service';
import { ParserService } from '../parser.service';
import {Router} from '@angular/router';
import { AutofillMonitor } from '@angular/cdk/text-field';
import { SnackbarService } from '../_services/snackbar.service';



@Component({
  selector: 'new-object-form',
  templateUrl: './new-object-form.component.html',
  styleUrls: ['./new-object-form.component.css']
})
export class NewObjectFormComponent implements OnInit {
  // is false wenn man ein Objekt bearbeiten will und nicht neu erstellen
  isAddMode: boolean = true;  
  objectId:string = ''; 

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private parser: ParserService,
    private router: Router,
    private dialog: MatDialog,
    private snackbar: SnackbarService
    ) {
    
      this.allInformations = new EditObjectModel; 
      this.objects = new SingleObjectModel(); 
      this.subObjects = new SubObjectModel(); 

      
    }

  objektNameControl = new FormControl('', Validators.required); 
  ratingIntervallControl = new FormControl('', [Validators.required, Validators.min(1)]);
  objectDescriptionControl = new FormControl('', Validators.maxLength(256)); 
  
  questionValue = new FormControl('', Validators.required);
  contactValue = new FormControl('', Validators.required);
  
  contactArrayControl = new FormArray([]); 
  frageArrayControl = new FormArray([], Validators.required);
  combinedQuestionAndContactArray = new FormArray([]);

  testForm = new FormGroup({
    // Allgemeines 
    // In der Form zu sehen
    objectName: this.objektNameControl,
    ratingIntervall: this.ratingIntervallControl,
    objectDescription: this.objectDescriptionControl,
    // Background Infos -- nur für Edit wichtig
    objectId: new FormControl(),

    // Fragen
    // In der Form zu sehen
    questions: this.frageArrayControl,
    contact: this.contactArrayControl,

    // Rids
    // In der Form zu sehen
    ridNumbers: new FormArray([])

  })

  ngOnInit() {
    let id = this.route.snapshot.params['id'];

    if (id) this.isAddMode = !id; 
    if (!this.isAddMode) {
      this.getObjectInfo(id);
    }
  }

  // *** Logik hinter den "RID Nummern" *** 

  // Hinzufügen der RIDs 
  addRid(rid: HTMLInputElement) {
    if (rid.value == '' ||  rid == undefined) return false; 
    this.ridrid.push(new FormControl(rid.value));
    rid.value = ''; 
    return true; 
  }

  // Löschen eines RIDs
  removeRid(index:number) {
    this.ridrid.removeAt(index);
  }

  
  // *** Logik hinter den "Fragen" ***

  // Hinzufügen der erstellten Fragen  
  addQuestion(question: HTMLInputElement, mail: HTMLInputElement) {
    if (this.contactValue.invalid || this.questionValue.invalid || question.value == '' || mail.value == '') return;

    // this.frageArrayControl.push(this.questionValue);
    this.frageArrayControl.push(new FormControl(question.value));

    this.contactArrayControl.push(new FormControl(mail.value));
    // Benötigt für die ngFor Schleife im HTML sonst doppelte For Schleife funktioniert nicht
    this.combinedQuestionAndContactArray.push(new FormControl({'title': this.questionValue.value, 'contact': this.contactValue.value}));
  
    question.value = ''; 
    mail.value = ''; 
  }

  // Entfernen der Fragen durch drauf klicken
  removeQuestion(index: number) {
    this.frageForm.removeAt(index); 
    this.combinedQuestionAndContactArray.removeAt(index); 
  }

  // Nach Submit (Neues oder Editiertes Objekt wird erstellt) 
  // -> senden an Backend 
  // -> Clearing des Formularfeldes
  addToDB() {
    let bodyForm = this.parser.parseAddObject(this.testForm.value); 
    bodyForm.id = this.route.snapshot.params['id'];
    

    console.log("Added to Database, sind alle Fragen gleich?: ", bodyForm); 
    this.apiService.callApi('/objects', 'POST', bodyForm, (res: any) => {
      this.saveRidToDB(res, bodyForm); 
    });

    
    this.goToMyRatings(bodyForm); 
    this.clearForm();
    
  }

  updateObject() {
    // same as Parse Add Objekt nur dass die RIDNumbers kein String[] sind sondern Objekt[]
    let bodyForm = this.parser.parseAddObject(this.testForm.value); 
    
    // Anpassung der Daten an die Datenbank - dürfen keine Strings sein müssen Objekte sein {id: string}
    /* bodyForm.ridNumbers.forEach((element, index) => {
      bodyForm.ridNumbers.splice(index, 1, {id: element}); 
    }) */
    /* console.log("TESTFORM in updateObject: ", this.testForm.value); 
    console.log("bodyform in updateObject nach Parsen: ", bodyForm); */ 
    this.apiService.callApi('/objects', 'PUT', bodyForm, (res: any) => {
      this.putRidToDB(res, bodyForm); 
    });

    setTimeout(() => {
      this.router.navigate(['./objekte-verwalten']);
    }, 1000);
  }

  saveRidToDB(id:string, bodyForm:AddObjectModel) {
    let body = {
      "objectid": id, 
      "title": JSON.stringify(bodyForm.ridNumbers)
    }

    this.apiService.callApi('/subobjects', 'POST', body, (res: any) => {
      return true; 
    });


  } 

  putRidToDB(id:string, bodyForm:AddObjectModel) {
    let body = {
      "objectid": bodyForm.id, 
      "title": JSON.stringify(bodyForm.ridNumbers)
    }

    this.apiService.callApi('/subobjects', 'PUT', body, (res: any) => {
      return true; 
    });


  } 

  goToMyRatings(bodyForm:AddObjectModel) {
    this.router.navigate(['./objekte-verwalten']).then((navigated:boolean) => {
      if (navigated) {
        this.snackbar.newObjectCreatedSnackbar(bodyForm.name); 
      } 
    })
  }

  clearForm() {
    this.testForm.reset();
    this.combinedQuestionAndContactArray.clear();
    this.frageForm.clear();
    this.ridrid.clear();
    
    return true; 
  }
 
  

  // TestGetter 
  get frageForm() {
    return this.testForm.get('questions') as FormArray; 
  } 

  get ridrid() {
    return this.testForm.get('ridNumbers') as FormArray; 
  }

  get contacts() {
    return this.testForm.get('contact') as FormArray; 
  }

// *********************************************************** EDIT **************************************************************************

  allInformations: EditObjectModel;
  objects: SingleObjectModel;
  subObjects: SubObjectModel;

  getObjectInfo(id:string) {
    this.apiService.callApi('/objects/'+id, 'GET', {}, (res: any) => {
      let parsedQuestion = JSON.parse(res.questions); 
      let parsedSubObjects = JSON.parse(res.subobjekte); 
      this.objects = this.parser.parseSingleObjectModel(res); 


      this.testForm.patchValue({
        objectName:this.objects.objectName,
        objectDescription: this.objects.objectDescription,
        objectId: this.objects.objectId,
        ratingIntervall: this.objects.ratingIntervall,
        questions: parsedQuestion.forEach((element:any) => {
          this.frageForm.push(new FormControl(element.title)); 
        }),
        contact: parsedQuestion.forEach((element:any) => {
          this.contacts.push(new FormControl(element.contact)); 
        }),
        ridNumbers: parsedSubObjects.forEach((element:any) => {
          this.ridrid.push(new FormControl(element)); 
        })
      });
      
      parsedQuestion.forEach((element:any) => {
        // console.log(element); 
        this.combinedQuestionAndContactArray.push(new FormControl(element)); 
      });
    }); 

  }

  // HIER IST ENDSTATION - Fragen haben keine ID und damit kann ich sie nicht löschen Teresa muss ids erstellen dann können Sie auch gelöscht werden
  deleteQuestion(index:any) {
    const dialogRef = this.dialog.open(DeleteQuestionComponent, {
      width: 'auto',
      height: 'auto', 
    })
  }



}
