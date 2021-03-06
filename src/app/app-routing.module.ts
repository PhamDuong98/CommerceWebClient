import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarService } from './navbar/navbar.service';


const routes: Routes = [
  NavbarService.childRoutes([
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'detail', loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailModule) },
  ]),

  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
