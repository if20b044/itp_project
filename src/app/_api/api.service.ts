import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url =  'https://webservice.one-intra.net/goandsee/api';  // 'https://application.one-intra.net/goandseeapi/api'; //  'https://localhost:44315/api';    //   

  
  headerDEV = {
    
    "Content-Type": "application/json"
  } 

  headerPROD = {
    "Content-Type": "application/json"
  }

  constructor(private http: HttpClient) { }

  successFunction(result: any) {
    console.log("SUCCESS: ", result);
  }

  errorFunction(error:any) {
    console.log("Error: ", error);
  }

callApi(path:string, method: string, param = {}, onSuccess = this.successFunction, onError = this.errorFunction) {
    this.http.request(method, this.url+path, {
    headers: (window.location.hostname == "localhost" ? this.headerDEV : this.headerPROD),
      body: param
    } )
    .subscribe(result => {
      onSuccess(result); 
    },
    error => onError(error))
  }
}
