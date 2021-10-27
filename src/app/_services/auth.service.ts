import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let isAdmin: boolean; 
    let check = localStorage.getItem('user'); 
    if (!check) return false; 
    let par = JSON.parse(check); 

    (par.isAdmin) ? isAdmin = true : isAdmin = false; 

    if (!isAdmin) {
      this.router.navigate(['/myratings']); 
      return false; 
    } 

    return isAdmin; 
  }
  
}
