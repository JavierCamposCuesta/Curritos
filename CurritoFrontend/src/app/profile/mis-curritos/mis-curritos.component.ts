import { Component, Input, OnInit } from '@angular/core';
import { AnuncioService } from 'src/app/services/anuncio.service';
import { Anuncio } from '../../interfaces/interface';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-mis-curritos',
  templateUrl: './mis-curritos.component.html',
  styleUrls: ['./mis-curritos.component.css'],
  providers: [MessageService]
})


export class MisCurritosComponent implements OnInit {
  constructor(private anuncioService: AnuncioService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig) { }
  
  ngOnInit(): void {
    this.misAnuncios();
    this.primengConfig.ripple = true;
    
  }

  listaMisAnuncios:Anuncio[]=[];
  anuncioSeleccionado:Anuncio={};
  dialogoVisible:boolean = false;
  

  /**
   * Este método resuelve la peticion de anuncioService, la cual dará una lista de anuncios que cargamos en la variable listaMisAnuncios
   */
  misAnuncios(){
    this.anuncioService.misAnuncios().subscribe( resp => {
      this.listaMisAnuncios=resp;
    })
  }

  /**
   * Este método se lanza cuando se pulsa el boton de editar un anuncio
   * @param anuncio 
   */
  seleccionarEventoEditar(anuncio:Anuncio){
    this.mostrarFormulario();
    this.anuncioSeleccionado = anuncio;
  }

  /**
   * Este evento es para mostrar la ventana emergente con el anuncio a editar
   */
  mostrarFormulario() {
    this.dialogoVisible = !this.dialogoVisible;
}

/**
 * Este método borrará un anuncio, le pasamos un id de anuncio por parámatro y resuelve la petición de anuncioService, en el caso de que 
 * se borre el anuncio se llamará al método correspondiente para que se muestre el mensaje adecuado
 * @param idAnuncio 
 */
 borrarAnuncio(idAnuncio:number){
  let solucion:boolean = true;
   this.anuncioService.borrarAnuncio(idAnuncio).subscribe(
    resp => {
       this.showSuccess()
       this.misAnuncios()
      //  setTimeout(function() {window.location.reload()}, 1000)
       
      },error => {
        this.showError();
      })
      // window.location.reload();
  
}

/**
 * Este método muestra el mensaje verde con el texto indicado si ha sido posible borrar un anuncio
 */
 showSuccess() {
  this.messageService.add({severity:'success', summary: 'Eliminado', detail: 'El anuncio ha sido eliminado'});
}

/**
 * Este método muestra el mensaje rojo con el texto indicado si no ha sido posible borrar un anuncio
 */
showError() {
  this.messageService.add({severity:'error', summary: 'Error', detail: 'No se ha podido eliminar el anuncio'});
}





}
