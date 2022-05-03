import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/interface';
import { AnuncioService } from 'src/app/services/anuncio.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() busqueda: string='';
  // @Output() onEnter: EventEmitter<string> = new EventEmitter();
  // busqueda2: string = "";
   usuarioRegistrado: Usuario={
    email: '',
    password: '',
    nombre: '',
    apellidos: '',
    telefono: '',
    fechaNacimiento: '',
    ubicacion: ''
   };
  
  constructor(private anuncioService:AnuncioService, private router: Router, private loginService:LoginService) { }

  ngOnInit(): void {
    this.conseguirUsuarioRegistrado();
  }

  conseguirUsuarioRegistrado(){
    this.loginService.validarToken().subscribe({
        
      next:resp => {
        this.usuarioRegistrado = resp;
     },
     error: error =>{
     }
   })
  }

}
