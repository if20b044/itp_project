import { ObjectModel } from './../_models/object-model';
import { ApiService } from './../_api/api.service';
import { Component, OnInit } from '@angular/core';
import { ParserService } from '../_services/parser.service';

@Component({
  selector: 'app-list-rating',
  templateUrl: './list-rating.component.html',
  styleUrls: ['./list-rating.component.css']
})
export class ListRatingComponent implements OnInit {

  objects:ObjectModel[] = [] // Alle GET Daten aus der Datenbank werden hier gespeichert. 

  constructor(
    private apiService: ApiService,
    private parser: ParserService
    ) { }

    datify(date:Date) {
      let rawDate1 = new Date(); 
      let rawDate2 = new Date(date); 
      // Alle Dates brauchen eine Start Basis darum setze ich sie hier auf 00:00:00 Uhr.
      let formattedDate1 = new Date(rawDate1.getFullYear(), rawDate1.getMonth(), rawDate1.getDate()); 
      let formattedDate2 = new Date(rawDate2.getFullYear(), rawDate2.getMonth(), rawDate2.getDate()); 
  
      let calc = formattedDate1.getTime() - formattedDate2.getTime() 
      let days = calc / (1000*3600*24); 
  
      return Math.ceil(days); 
      
    } 

    getObjectList() {
      this.apiService.callApi('/objects', 'GET', {}, (res: any) => {
        this.objects = res.map((r: any) => this.parser.parseObject(r));

        // Logik um zuerst nach Datum dann nach Name zu sortieren
        let time = this.objects.sort((val1, val2) => {
          // Wenn am selben Tag bewertet dann nach Namen sortieren ansonsten nach Datum
          if (this.datify(val2.lastrated) == this.datify(val1.lastrated)) {
            return (val2.name > val1.name) ? -1 : 1; 
          } 
            
          return this.datify(val2.lastrated) - this.datify(val1.lastrated); 
          }); 

        
        // Logik für automatisches Weiterleiten nach einem Rating zum nächsten Objekt
        let localStorageId = new Array(); 
        this.objects.forEach((element:any) => {
          localStorageId.push({'id': element.id, 'oname': element.name});
        })
        localStorage.setItem('Objekte' , JSON.stringify(localStorageId)); 
      }); 
    }
 
  ngOnInit() {
   this.getObjectList();
  }
}
