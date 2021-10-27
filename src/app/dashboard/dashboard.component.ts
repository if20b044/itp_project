import { ApiService } from './../_api/api.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user.mode';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  menus = [
    {
      title: "Manage Objects",
      icon: "mode_edit",
      routerLink: "/objekte-verwalten",
      isMail: false,
    },
    {
      title: "My Ratings",
      icon: "star_outline",
      routerLink: "/myratings",
      isMail: false,
    },
    {
      title: "Feedback",
      icon: "mail_outline",
      routerLink: "/",
      isMail: true,
    },
    {
      title: "Map",
      icon: "location_on",
      routerLink: "/",
      isMail: false,
    }
  ]

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

}
