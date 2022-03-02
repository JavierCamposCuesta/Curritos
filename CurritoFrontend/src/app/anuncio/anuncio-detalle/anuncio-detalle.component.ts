import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Anuncio } from 'src/app/interfaces/interface';
import { AnuncioService } from 'src/app/services/anuncio.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-anuncio-detalle',
  templateUrl: './anuncio-detalle.component.html',
  styleUrls: ['./anuncio-detalle.component.css']
})
export class AnuncioDetalleComponent implements OnInit {

  constructor(private anuncioService: AnuncioService,
    private rutaActiva: ActivatedRoute,
    private loginService: LoginService,
    private router: Router,
    private messageService: MessageService,) {}

  anuncioDetalle: Anuncio = {}

  ngOnInit(): void {
    this.sacarParametroRuta();
  }

 

  cargarAnuncioDetalle(id: number){
   this.anuncioService.mostrarAnuncioDetalle(id).subscribe({
    next:resp => {
      this.anuncioDetalle = resp;
      
      
   },
   error: error =>{
    
   }
  })
  }

  sacarParametroRuta(){
    this.rutaActiva.params.subscribe((idRuta: any) => {
    this.cargarAnuncioDetalle(idRuta.id); 
  });
  }

  solicitarCurritoComprobacion(anuncio: Anuncio){
    
    this.loginService.validarToken().subscribe({
         
      next:resp => {
        
       this.solicitarCurrito(anuncio);
        
     },
     error: error =>{
       
       this.router.navigate(['login'])
     }
   })
  }

  solicitarCurrito(anuncio: Anuncio){
    this.anuncioService.solicitarCurrito(anuncio).subscribe({
      next:resp => {
        this.mostrarMensajeAnuncioSolicitado();
        
        
     },
     error: error =>{
      this.mostrarAdvertenciaAnuncioYaSolicitado();
     }
    })
  }


  //Mensajes
  /**
 * Este método muestra el mensaje rojo con el texto indicado si no ha sido posible borrar un anuncio
 */
   mostrarAdvertenciaAnuncioYaSolicitado() {
  this.messageService.add({severity:'info', summary: 'Info', detail: 'El anuncio ya estaba solicitado'});
}

/**
 * Este método muestra el mensaje verde con el texto indicado si ha sido posible borrar un anuncio
 */
 mostrarMensajeAnuncioSolicitado() {
  this.messageService.add({severity:'success', summary: 'Anuncio Solicitado', detail: 'El anuncio ha sido solicitado'});
}

}
