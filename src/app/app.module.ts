import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './_api/api.service';
import { ObjectsService } from './_services/objects.service';



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './logout/logout.component';
import { AddNewObjectComponent } from './add-new-object/add-new-object.component';
import { NewObjectFormComponent } from './new-object-form/new-object-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListObjectsComponent } from './list-objects/list-objects.component';

// Material Imports
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { ListRatingComponent } from './list-rating/list-rating.component';
import { NewRatingComponent } from './new-rating/new-rating.component';
import { ListRatingObjectComponent } from './list-rating-object/list-rating-object.component';
import { MoreInfoDialogComponent } from './more-info-dialog/more-info-dialog.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { MyratingsComponent } from './myratings/myratings.component';
import { NewratingbuttonComponent } from './newratingbutton/newratingbutton.component';
import { RatingDialogComponent } from './rating-dialog/rating-dialog.component';
import { RatingPictureDialogComponent } from './rating-picture-dialog/rating-picture-dialog.component';
import { DeleteQuestionComponent } from './delete-question/delete-question.component';
import { ShowPictureDialogComponent } from './show-picture-dialog/show-picture-dialog.component'; 




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    AddNewObjectComponent,
    NewObjectFormComponent,
    ListObjectsComponent,
    FooterComponent,
    DeleteDialogComponent,
    ListRatingComponent,
    NewRatingComponent,
    ListRatingObjectComponent,
    MoreInfoDialogComponent,
    BackButtonComponent,
    MyratingsComponent,
    NewratingbuttonComponent,
    RatingDialogComponent,
    RatingPictureDialogComponent,
    DeleteQuestionComponent,
    ShowPictureDialogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: DashboardComponent
      },
      { 
        path: 'logout', 
        component: LogoutComponent
      },
      { 
        path: 'objekte-verwalten/objekt-erstellen', 
        component: NewObjectFormComponent
      },
      { 
        path: 'objekte-verwalten/objekt-bearbeiten/:id', 
        component: NewObjectFormComponent
      },
      { 
        path: 'objekte-verwalten', 
        component: ListObjectsComponent
      },
      { 
        path: 'create-new-rating/:oid/:soid/:sname', 
        component: NewRatingComponent
      },
      { 
        path: 'create-new-rating/:oid', 
        component: ListRatingObjectComponent
      },
      { 
        path: 'create-new-rating', 
        component: ListRatingComponent
      },
      { 
        path: 'myratings', 
        component: MyratingsComponent
      }
    ]),
    MaterialModule
  ],
  providers: [
    ObjectsService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
