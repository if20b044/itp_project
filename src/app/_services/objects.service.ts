import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjectsService {
  arrayOfObjects = new Array<Object>();

  saveNewObject(object: Object) {
    this.arrayOfObjects.push(object); 
    // PUSH API Anbindung
  }

  getObjects() {
    // GET API Anbindung
    return this.arrayOfObjects; 
  }


  // Test Daten - Get Object List
  getObjectList() {
    let objectList = [{ 
      oid: '1', 
      oname: "Laptop", 
      odescription: 'Ein wundersamer Laptop',
      ointerval: '30',
      created: '2020-08-03 12:12:30',
      createdBy: 'A012512', 
    }, 
    { 
      oid: '2', 
      oname: "Fernseher", 
      odescription: 'Ein Fernseher',
      ointerval: '30',
      created: '2020-08-03 12:12:30', 
      createdBy: 'A012512' 
    }, 
    { 
      oid: '3', 
      oname: "Flugzeug", 
      odescription: 'Ein Flugzeug', 
      ointerval: '30',
      created: '2020-08-03 12:12:30', 
      createdBy: 'A012512' 
    }, 
    { 
      oid: '4', 
      oname: "Hubschrauber", 
      odescription: 'Ein wundersamer Hubschrauber',
      ointerval: '30',
      created: '2020-08-03 12:12:30', 
      createdBy: 'A012512' 
    },
    { 
      oid: '5', 
      oname: "Neues Objekt", 
      odescription: 'Ein neues Objekt',
      ointerval: '30',
      created: '2020-08-03 12:12:30', 
      createdBy: 'A012512' 
    }]
      
    return objectList; 
  }
  
  // Test Daten - Get One Object über Object ID
  getOneObject(id:any) {
    let returnObject:object | undefined; 
    let testArray = [{ 
      oid: '1', 
      oname: "Laptop", 
      odescription: 'Ein wundersamer Laptop',
      ointerval: '30',
      created: '2020-08-03 12:12:30',
      createdBy: 'A012512', 
    }, 
    { 
      oid: '2', 
      oname: "Fernseher", 
      odescription: 'Ein Fernseher',
      ointerval: '30',
      created: '2020-08-03 12:12:30', 
      createdBy: 'A012512' 
    }, 
    { 
      oid: '3', 
      oname: "Flugzeug", 
      odescription: 'Ein Flugzeug', 
      ointerval: '30',
      created: '2020-08-03 12:12:30', 
      createdBy: 'A012512' 
    }, 
    { 
      oid: '4', 
      oname: "Hubschrauber", 
      odescription: 'Ein wundersamer Hubschrauber',
      ointerval: '30',
      created: '2020-08-03 12:12:30', 
      createdBy: 'A012512' 
    }]
    
    // Nur für Testdaten - löschen da das Filtern von DB übernommen wird
    testArray.forEach(element => {
      if (element.oid === id) returnObject = element;
    })

    return returnObject;

    
  }

  getQuestionsOfObject(id:any) {
    let returnObject = new Array<Object>(); 
    let testArray = [
      {
        qid: '12345',
        qname: 'Ist es ein Laptop?',
        qoid: '1',
        quserid: 'A065989',
        qtimestamp: '2021-05-10 16:24:11.030',
        mail: 'technik@austrian.com'
      },
      {
        questionId: '12345',
        qname: 'Funktioniert er?',
        qoid: '2',
        quserid: 'A065989',
        qtimestamp: '2021-05-10 16:24:11.030',
        mail: 'technik@austrian.com'
      },
      {
        questionId: '12345',
        qname: 'Kann er was?',
        qoid: '3',
        quserid: 'A065989',
        qtimestamp: '2021-05-10 16:24:11.030',
        mail: 'technik@austrian.com'
      },
      {
        questionId: '12345',
        qname: 'Was macht er?',
        qoid: '4',
        quserid: 'A065989',
        qtimestamp: '2021-05-10 16:24:11.030',
        mail: 'technik@austrian.com'
      },
      {
        questionId: '12345',
        qname: 'Wer?',
        qoid: '2',
        quserid: 'A065989',
        qtimestamp: '2021-05-10 16:24:11.030',
        mail: 'technik@austrian.com'
      },
      {
        questionId: '12345',
        qname: 'Was?',
        qoid: '3',
        quserid: 'A065989',
        qtimestamp: '2021-05-10 16:24:11.030',
        mail: 'technik@austrian.com'
      },
      {
        questionId: '12345',
        qname: 'Warum?',
        qoid: '3',
        quserid: 'A065989',
        qtimestamp: '2021-05-10 16:24:11.030',
        mail: 'technik@austrian.com'
      },
      {
        questionId: '12345',
        qname: 'Wirklich?',
        qoid: '4',
        quserid: 'A065989',
        qtimestamp: '2021-05-10 16:24:11.030',
        mail: 'technik@austrian.com'
      },
      {
        questionId: '12345',
        qname: 'Ist es echt?',
        qoid: '4',
        quserid: 'A065989',
        qtimestamp: '2021-05-10 16:24:11.030',
        mail: 'technik@austrian.com'
      },
      {
        questionId: '12345',
        qname: 'Mir gehen die Fragen aus.',
        qoid: '4',
        quserid: 'A065989',
        qtimestamp: '2021-05-10 16:24:11.030',
        mail: 'technik@austrian.com'
      },
      {
        questionId: '12345',
        qname: 'Frage?',
        qoid: '5',
        quserid: 'A065989',
        qtimestamp: '2021-05-10 16:24:11.030',
        mail: 'technik@austrian.com'
      }
    ]

    // Nur für Testdaten - löschen da das Filtern von DB übernommen wird
    testArray.forEach(element => {
      if (element.qoid === id) returnObject.push(element);
    })

    return returnObject;

  }


  getRidNumbersOfObject(id:any) {
    let returnObject = new Array<Object>(); 
    let testArray = [{
        sid: 'subobjectId 19209418298',
        sname: 'OS-N183155',
        soid: '1',
        ouserid: 'Walter',
        sotimestamp: '2021-11-13'
      },{
        sid: 'subobjectId 2314141',
        sname: 'OS-N193588',
        soid: '2',
        ouserid: 'Franz',
        sotimestamp: '2021-11-18'
      },
      {
        sid: 'subobjectId 8939927',
        sname: 'OS-N909111',
        soid: '3',
        ouserid: 'Wolfgang',
        sotimestamp: '2021-11-18'
      },
      {
        sid: 'subobjectId 8939927',
        sname: 'OS-N909111',
        soid: '4',
        ouserid: 'Ramiz',
        sotimestamp: '2021-11-18'
      },
      {
        sid: 'subobjectId 8939927',
        sname: 'OS-N909111',
        soid: '2',
        ouserid: 'Teresa',
        sotimestamp: '2021-11-18'
      },
      {
        sid: 'subobjectId 8939927',
        sname: 'OS-N909111',
        soid: '3',
        ouserid: 'Andreas',
        sotimestamp: '2021-11-18'
      },
      {
        sid: 'subobjectId 8939927',
        sname: 'OS-N909111',
        soid: '5',
        ouserid: 'Pascal',
        sotimestamp: '2021-11-18'
      }]


      // Nur für Testdaten - löschen da das Filtern von DB übernommen wird
      testArray.forEach(element => {
        if (element.soid === id) returnObject.push(element);
      })
  
      return returnObject;
  }

}
