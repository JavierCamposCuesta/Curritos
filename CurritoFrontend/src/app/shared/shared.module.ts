import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';



@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    SearchComponent,
    HeaderComponent,
    SubMenuComponent    
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    SidebarComponent,
    FooterComponent,
    SearchComponent,
    HeaderComponent,
    SubMenuComponent 
  ]
})
export class SharedModule { }
