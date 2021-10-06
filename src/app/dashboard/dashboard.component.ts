import { Component, OnInit } from '@angular/core';


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
      isMail: false
    },
    {
      title: "My Ratings",
      icon: "star_outline",
      routerLink: "/myratings",
      isMail: false
    },
    {
      title: "Feedback",
      icon: "mail_outline",
      routerLink: "/",
      isMail: true
    },
    {
      title: "Logout",
      icon: "power_settings_new",
      routerLink: "/logout",
      isMail: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
