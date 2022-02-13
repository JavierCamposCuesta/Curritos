import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../services/auth-guard.service';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { MisCurritosComponent } from './mis-curritos/mis-curritos.component';
import { OpinionsComponent } from './opinions/opinions.component';



@NgModule({
  declarations: [
    FavoritesComponent,
    MessagesComponent,
    ProfileComponent,
    MisCurritosComponent,
    OpinionsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ],
  exports: []
})
export class ProfileModule { }
