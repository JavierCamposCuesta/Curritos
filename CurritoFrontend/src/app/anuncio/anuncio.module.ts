import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAnuncioComponent } from './card-anuncio/card-anuncio.component';
import { AnuncioComponent } from './anuncio.component';
import { SharedModule } from 'primeng/api';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { FormsModule } from '@angular/forms';
import {SliderModule} from 'primeng/slider';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    CardAnuncioComponent,
    AnuncioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OverlayPanelModule,
    FormsModule,
    SliderModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    ButtonModule
  ],
  exports: [
    AnuncioComponent
  ]
})
export class AnuncioModule { }
