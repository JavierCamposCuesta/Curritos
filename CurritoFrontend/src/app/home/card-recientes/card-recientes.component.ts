import { Component, OnInit } from '@angular/core';
import { Anuncio } from 'src/app/interfaces/interface';
import { AnuncioService } from 'src/app/services/anuncio.service';

@Component({
  selector: 'app-card-recientes',
  templateUrl: './card-recientes.component.html',
  styleUrls: ['./card-recientes.component.css']
})
export class CardRecientesComponent implements OnInit {

  constructor(private anuncioService : AnuncioService) { }

  ngOnInit(): void {
    this.cargarAnunciosRecientes();
  }

  anunciosRecientes:Anuncio[]=[];

  cargarAnunciosRecientes(){
    this.anuncioService.cargarAnunciosRecientes().subscribe({
          
      next:resp => {
        this.anunciosRecientes = resp;
        this.anunciosRecientes.splice(9)
        
     },
     error: error =>{
      
     }
  
     
     
     
   })
  }

}
