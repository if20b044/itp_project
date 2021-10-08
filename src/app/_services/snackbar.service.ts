import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) { }

  ngOnInit() {
      
  }

  ratingSnackbar(data:any) {

    this.snackbar.open(data + ` wurde bewertet` , 'Schließen', {
        data: data, 
        duration: 3000, 
        panelClass: ['snackbar']

    });
  }

  newObjectCreatedSnackbar(data:any) {
    this.snackbar.open(data + ' wurde erfolgreich erstellt.', 'Schließen', {
      data: data, 
      duration: 3000, 
      panelClass: ['snackbar'],
    })
  }

  objectUpdating(data:any) {
    this.snackbar.open(data + ' wurde erfolgreich bearbeitet.', 'Schließen', {
      data: data, 
      duration: 3000, 
      panelClass: ['snackbar'],
    })
  }

  deleteSnackbar() {
    this.snackbar.open('Objekt wurde erfolgreich gelöscht.', 'Schließen', {
      duration: 3000,
      panelClass: ['snackbar']
    })
  }

}