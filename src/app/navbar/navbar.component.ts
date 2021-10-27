import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_api/api.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginName:string = 'GRINGO'; 

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getName(); 
    
  }

  getName() {
    
    let userLocalStorage = localStorage.getItem('user'); 
    if (userLocalStorage == null) return false;

    let parsedUser = JSON.parse(userLocalStorage);
    this.loginName = parsedUser.firstName; 
    return true; 
  } 

}
