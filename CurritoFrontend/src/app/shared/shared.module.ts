import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { FavoritesComponent } from '../profile/favorites/favorites.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { UploadImageComponent } from './upload-image/upload-image.component';



@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    SearchComponent,
    HeaderComponent,
    SubMenuComponent,
    UploadImageComponent    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidebarComponent,
    FooterComponent,
    SearchComponent,
    HeaderComponent,
    SubMenuComponent,
    UploadImageComponent 
  ]
})
export class SharedModule { }
