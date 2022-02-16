import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categoria, LoginRespuesta } from 'src/app/interfaces/interface';
import { addAnuncioService } from 'src/app/services/addAnuncio.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { RegisterService } from 'src/app/services/register.service';
import { ValidatorRegistroService } from 'src/app/services/validatorRegistro.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-currito',
  templateUrl: './add-currito.component.html',
  styleUrls: ['./add-currito.component.css']
})
export class AddCurritoComponent implements OnInit {

  
  miFormulario: FormGroup = this.fb.group({
    titulo: ['', [Validators.required]],
    categoria: ['', [ Validators.required]],
    precio: ['', [ Validators.required  ]],
    tipoPrecio: ['', [ Validators.required  ]  ],
    descripcion: [''  ],
    // file: ['', [ Validators.required, Validators.pattern(this.ValidatorRegistroService.nombrePattern)]  ],
    ubicacion: ['' ],
  },
  {
  
  }
  );
  
  solucion: string = "";
  private baseUrl: string = environment.baseUrl; 
  
  constructor( private fb: FormBuilder,
    private ValidatorRegistroService: ValidatorRegistroService,
    private registerService: RegisterService,
    private http: HttpClient,
    private router:Router,
    private categoriaService:CategoriaService,
    private addAnuncioService: addAnuncioService ) { }
    
    
    ngOnInit(): void {
      
      this.miFormulario.reset({
        titulo: '',
        categoria: '',
        precio: '',
        tipoPrecio: '',
        descripcion: '',
        ubicacion: ''
      })

      this.mostrarCategorias();
    }
    
    campoNoValido( campo: string ) {
     
      // this.findInvalidControlsRecursive(this.miFormulario);
      return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched;
    }
  
      /**
       * Este metodo llamará al metodo añadirAnuncio y marcará todos los campos del formulario como marcados
       */
      submitFormulario() {
      
        this.addCurrito()
       
      
        this.miFormulario.markAllAsTouched();
      
      }
  
      
      /**
       * Este metodo recibira un usuario del formulario y llamara 
       * a registerService para realizar una peticion post de añadir
       * el usuario
       */
      addCurrito(){
        let respuesta: LoginRespuesta = {};
        let solucion: string;
        const anuncio = {
          "titulo": this.miFormulario.get("titulo")?.value,
          "categoria": this.miFormulario.get("categoria")?.value,
          "precio": this.miFormulario.get("precio")?.value,
          "tipoPrecio": this.miFormulario.get("tipoPrecio")?.value,
          "descripcion": this.miFormulario.get("descripcion")?.value,
          "ubicacion": this.miFormulario.get("ubicacion")?.value

          
          
  
      }
      this.addAnuncioService.addAnuncio(anuncio).subscribe({
          
        next:resp => {
          respuesta = resp;
          // console.log(repuesta.jwt_token)
         if(respuesta.jwt_token != null){
           localStorage.setItem('jwt', respuesta.jwt_token);
           this.router.navigate(['home']);
           solucion = "true";
         }
       },
       error(error){
         solucion = "error";
         localStorage.removeItem('jwt');
         Swal.fire({
           title: 'Error al inciar sesión',
           text: 'Vuelve a intentarlo',
           icon: 'error',
           confirmButtonText: 'Ok'
         })
       }
  
       
       
       
     })
      }
  
  listaCategorias:Categoria[]=[];
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
  
  
  
