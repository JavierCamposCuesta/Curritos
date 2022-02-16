import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ValidatorRegistroService } from 'src/app/services/validatorRegistro.service';
import { LoginRespuesta } from 'src/app/interfaces/interface';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
  email: ['', [Validators.required, Validators.pattern(this.ValidatorRegistroService.emailPattern)]],
  password: ['', [ Validators.required]  ],
})

solucion: string = "";




get emailErrorMsg(): string {
    
  const errors = this.miFormulario.get('email')?.errors!;
  if ( errors['required'] ) {
    return 'Email es obligatorio';
  } else if ( errors['pattern'] ) {
    return 'El valor ingresado no tiene formato de correo';
  }

  return '';
}
  constructor( private fb: FormBuilder,
    private ValidatorRegistroService: ValidatorRegistroService,
    private loginService: LoginService,
    private router: Router ) { }


    ngOnInit(): void {

      this.miFormulario.reset({
        email: '',
        password: ''
      })
    }
    campoNoValido( campo: string ) {
      return this.miFormulario.get(campo)?.invalid
              && this.miFormulario.get(campo)?.touched;
    }

     
    submitFormulario() {
    
      this.login()
     
    
      this.miFormulario.markAllAsTouched();
    
    }

    comprobarRespuestaLogin(){
      if(this.solucion == "true"){

      }
      else if(this.solucion == "incorrect"){

      }
      else{

      }
    }

    /**
     * Este metodo llamara al metodo de login de loginService y realizará una petición a la API, pasandole un objeto usuario con el email y la pass 
     * que ha introducido, en caso de que esas credenciales sean válidas se almacenará el token en el localStorage, de no ser así se llamará a un método
     * para indicar que los datos introducidos no son correctos
     */
    login(){
      let solucion: string;
      let respuesta: LoginRespuesta = {};
      this.loginService.login(this.miFormulario.get("email")?.value, this.miFormulario.get("password")?.value).subscribe({
        
        next: resp => {
          respuesta = resp;
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
            text: 'Los datos introducidos no son correctos',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
        
        
        
        
      })
}





}


