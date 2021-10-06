import { EditSubObjectModel } from './_models/editSubobjectModel';
import { RatingsModel } from './_models/ratings-model';
import { SubObjectModel } from './_models/subobject-model';
import { EditObjectModel } from './_models/edit-object';
import { AddObjectModel } from './_models/addObject-model';
import { Injectable } from '@angular/core';
import { ObjectModel } from './_models/object-model';
import { SingleObjectModel } from './_models/single-object-model';

@Injectable({
  providedIn: 'root'
})
export class ParserService {

  constructor() { }

  parseObject(res: any) {
    var o = new ObjectModel();

    o.id = res.id
    o.name = res.name
    o.created = res.created
    o.numQuestions = res.OnumOfquestion
    o.name = res.name
    o.createdBy = res.createdBy
    o.lastAnswered = new Date(res.lastAnswered) 
    o.lastModified = new Date(res.lastModified)

    return o
  }

  parseAddObject(res:any) {
    var o = new AddObjectModel(); 

    o.id = res.objectId;
    o.name = res.objectName; 
    o.interval = res.ratingIntervall; 
    o.description = res.objectDescription; 
    o.questions = JSON.stringify(res.questions); 
    o.contact = JSON.stringify(res.contact); 
    o.ridNumbers = res.ridNumbers;

    return o; 
  }

  parseEditSubObject(res:any) {
    var o = new EditSubObjectModel(); 

    o.id = res.objectId;
    o.name = res.objectName; 
    o.interval = res.ratingIntervall; 
    o.description = res.objectDescription; 
    o.questions = JSON.stringify(res.questions); 
    o.contact = JSON.stringify(res.contact); 
    o.ridNumbers = res.ridNumbers;

    return o; 
  }

  // Combining Single Object Model + SubObject Model 
  parseEditObjectModel(object:SingleObjectModel, subobject:SubObjectModel) {
    var o = new EditObjectModel(); 

    o.objectId = object.objectId; 
    o.objectDescription = object.objectDescription; 
    o.objectName = object.objectName; 
    o.ratingIntervall = object.ratingIntervall;
    o.questions = object.questions; 
    o.ridNumbers = subobject.title;

    return o;

  }

  parseSingleObjectModel(res:any) {
    var o = new SingleObjectModel(); 

    o.objectId = res.id; 
    o.objectDescription = res.description; 
    o.objectName = res.name; 
    o.ratingIntervall = res.interval; 
    o.questions = JSON.parse(res.questions); 
    o.timestamp = res.timestamp;
    o.ridNumbers = JSON.parse(res.subobjekte); 

    return o; 
  }

  parseSubObjectModel(res:any) {
    var o = new SubObjectModel(); 

    o.objectid = res.objectid; 
    o.ouserid = res.ouserid; 
    o.sid = res.sid; 
    o.title = res.title; 

    return o; 
  }

  parseRatingsModel(res:any) {
    var o = new RatingsModel(); 
    
    o.objectId = res.id, 
    o.objectName = res.objectname,
    o.subobject = res.subobject, 
    o.subobjectName = res.subobjectname;
    o.timestamp = (res.timestamp).substr(0,10),
    o.questionsForObject = res.questions

    return o; 
  }

}
