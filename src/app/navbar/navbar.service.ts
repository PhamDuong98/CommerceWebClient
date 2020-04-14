import { Injectable } from '@angular/core';
import { Routes, Route } from '@angular/router';
import { NavbarComponent } from './navbar.component';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  /**
    * Creates routes using the shell component and authentication.
    * @param routes The routes to add.
    * @return The new route using shell as the base.
    */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: NavbarComponent,
      children: routes
    };
  }
}
