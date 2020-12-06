import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../components/servises/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanLoad {

    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
        return this.authService.isAuthenticated().then(isAuth => {
            if (isAuth) {
                return true
            } else {
                this.router.navigate(['/login'])
                return false
            }
        })
    }

    canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
        return this.authService.isAuthenticated().then(isAuth => {
            if (isAuth) {
                return true
            } else {
                this.router.navigate(['/login'])
                return false
            }
        })
    }

}