import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth-guard.service';
import { FavoritesComponent } from './favorites/favorites.component';



const routes: Routes = [
  // {
    { path: '', redirectTo: 'favorites'},
    { path: 'favorites',canActivate:[AuthGuard], component: FavoritesComponent },
    { path: '**', redirectTo: 'favorites' }
    // path:'', canActivateChild:[AuthGuard], component: FavoritesComponent,
    // children: [
    //   { path: 'favorites', component: FavoritesComponent},
    //   { path: '**', redirectTo: 'favorites' }
    // ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

