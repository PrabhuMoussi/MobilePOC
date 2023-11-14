import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationGuard implements CanActivate {
    constructor(
        private router: Router
    ) {

    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        let result = sessionStorage.getItem('loggedUserID');
        if (result) {
            return true;
        }

        this.router.navigate(['/login'], {
            queryParams: { redirect: state.url },
            replaceUrl: true
        })

        return false;
    }

}