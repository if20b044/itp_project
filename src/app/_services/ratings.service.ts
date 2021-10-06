import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingsService {

  constructor() { }

  getRidNumbersOfObject(id:any) {
    let returnObject = new Array<Object>(); 
    let testArray = [{
        sid: '19209418298',
        sname: 'OS-N183155',
        soid: '1',
        ouserid: 'Walter',
        sotimestamp: '2021-11-13'
      },{
        sid: '2314141',
        sname: 'OS-N193588',
        soid: '2',
        ouserid: 'Franz',
        sotimestamp: '2021-11-18'
      },
      {
        sid: '8939927',
        sname: 'OS-N909111',
        soid: '3',
        ouserid: 'Wolfgang', 
        sotimestamp: '2021-11-18'
      },
      {
        sid: '8939927',
        sname: 'OS-N909111',
        soid: '4',
        ouserid: 'Ramiz',
        sotimestamp: '2021-11-18'
      },
      {
        sid: '8939927',
        sname: 'OS-N909111',
        soid: '2',
        ouserid: 'Teresa',
        sotimestamp: '2021-11-18'
      },
      {
        sid: '8939927',
        sname: 'OS-N909111',
        soid: '3',
        ouserid: 'Andreas',
        sotimestamp: '2021-11-18'
      },
      {
        sid: '8939927',
        sname: 'OS-N909111',
        soid: '5',
        ouserid: 'Pascal',
        sotimestamp: '2021-11-18'
      },
      {
        sid: '8939927',
        sname: 'OS-N909111',
        soid: '4',
        ouserid: 'Ramiz',
        sotimestamp: '2021-11-18'
      }]


      // Nur für Testdaten - löschen da das Filtern von DB übernommen wird
      testArray.forEach(element => {
        if (element.soid === id) returnObject.push(element);
      })
  
      return returnObject;
    }

}
