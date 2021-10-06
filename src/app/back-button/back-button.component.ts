import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {
  
  // Variable soll prüfen ob er zweimal oder einmal zurückspringt
  sname:string = '../'; 
  constructor(private route: ActivatedRoute) { 
    if (this.route.snapshot.params['sname']) this.sname = '../..';
  }

  ngOnInit(): void {
  }

}
