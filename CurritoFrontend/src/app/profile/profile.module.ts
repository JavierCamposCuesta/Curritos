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
import { RouterModule } from '@angular/router';
import { AddCurritoComponent } from './add-currito/add-currito.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FavoritesComponent,
    MessagesComponent,
    ProfileComponent,
    MisCurritosComponent,
    OpinionsComponent,
    AddCurritoComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class ProfileModule { }
