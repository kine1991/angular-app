import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }



    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated().then(isAuth => {
            console.log(isAuth)
            if(isAuth){
                return true
            } else {
                this.router.navigate(['/posts'], {
                    queryParams: {
                      auth: true
                    }
                })
            }
        })
        
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state)
    }
}