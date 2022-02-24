import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAnuncioComponent } from './card-anuncio/card-anuncio.component';
import { AnuncioComponent } from './anuncio.component';
import { SharedModule } from 'primeng/api';



@NgModule({
  declarations: [
    CardAnuncioComponent,
    AnuncioComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AnuncioComponent
  ]
})
export class AnuncioModule { }
