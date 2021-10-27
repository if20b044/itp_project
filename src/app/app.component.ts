import { ApiService } from './_api/api.service';
import { AuthService } from './_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user.mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GoAndSee';
  user: User = new User(); 
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getUser(); 
  }

  getUser() {
    this.apiService.callApi('/users', 'GET', {}, (res: any) => {
      if(localStorage.getItem('user')) localStorage.removeItem('user'); 
      this.user.userId = res.userId; 
      this.user.firstName = res.firstName; 
      this.user.lastName = res.lastName; 
      this.user.isAdmin = res.isAdmin; 

      localStorage.setItem('user', JSON.stringify(this.user)); 
    });
  }
}
