import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private utilisateurService: UserService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('/Auth.guard.ts/ utilisateur logged ? ' + this.utilisateurService.logged);
    if (!this.utilisateurService.logged) {
      this.router.navigateByUrl('login');
      return this.utilisateurService.logged;
    } else {
      return this.utilisateurService.logged;
    }
  }
}
