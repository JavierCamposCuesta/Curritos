import { Component, Input, OnInit } from '@angular/core';
import { Anuncio } from 'src/app/interfaces/interface';
import { AnuncioService } from 'src/app/services/anuncio.service';

@Component({
  selector: 'app-card-anuncio',
  templateUrl: './card-anuncio.component.html',
  styleUrls: ['./card-anuncio.component.css']
})
export class CardAnuncioComponent implements OnInit {

  constructor(private anuncioService:AnuncioService) { }

  
  listaAnuncios:Anuncio[]=[];
  ngOnInit(): void {
    this.cargarBusquedaAnuncios();
    
  }

  ngOnChanges(): void{
    this.cargarBusquedaAnuncios();
  }

  // cargarAnuncios(){
  //   this.listaAnuncios = this.anuncioService.darListaAnuncios();
  //   console.log(this.listaAnuncios)
  // }
  cargarBusquedaAnuncios(){
    this.anuncioService.buscarAnuncio(this.anuncioService.darTermino()).subscribe({
         
     next:resp => {
       this.listaAnuncios = resp;
       console.log("lista de cargar anuyncios"+ this.listaAnuncios.length)
    },
    error(error){
    }
  })
 }
  
  

}
