import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../interfaces/categoria.interface';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  images: any; 
  responsiveOptions;
  listaCategorias:Categoria[]=[];

  constructor(private categoriaService: CategoriaService) {
      this.responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 7,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 5,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 3,
            numScroll: 1
        }
    ];
  }

  ngOnInit(): void {
      this.mostrarCategorias();
    }
    
    /**
     * Metodo para mostrar la lista de categorias, la cual la recibe del servicio categoriaService
     */
    mostrarCategorias(){
        this.categoriaService.mostrarCategorias()
        .subscribe( resp => {
          this.listaCategorias=resp;
        })
    }


  
  
  


}
