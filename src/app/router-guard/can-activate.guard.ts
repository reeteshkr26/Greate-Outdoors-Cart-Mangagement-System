import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  
  private userName : string = null;

  isLoggedIn() : boolean {
    return this.userName!=null;
  }

  logOut() {
    this.userName=null;
  }

  logIn(unm:string,pwd:string) : boolean {
      if("vamsy"==unm && "vamsy"==pwd){
        this.userName="Vamsy"; 
      } else{
        this.userName=null;
      }
      return this.isLoggedIn();
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return of(true);//If false the cart component not activate
  }
  
}
