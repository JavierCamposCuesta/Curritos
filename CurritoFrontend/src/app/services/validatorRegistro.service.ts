import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * Este servicio será el encargado de hacer todas las validaciones del formulario de registro
 */
export class ValidatorRegistroService implements AsyncValidator{

  public apellidosPattern: string = '([a-zA-ZñÑ]+) ([a-zA-ZñÑ]+)';
  public nombrePattern: string = '[A-Za-z  ]{1,50}';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  public telefonoPattern: string = "[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]";


  solucion: string= "";
  constructor(private http: HttpClient) { }


  

  /**
   * Este método validará que ambas contraseñas introducidas son iguales
   * @param campo1 contraseña 1
   * @param campo2 contraseña 2
   * @returns 
   */
  camposIguales( campo1: string, campo2: string ) {

    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if ( pass1 !== pass2 ) {
        formGroup.get(campo2)?.setErrors({ noIguales: true });
        return { noIguales: true }
      } 



      formGroup.get(campo2)?.setErrors(null);

      return null
    }

  }

  

/**
 * La clase implementa a AsyncValidator por lo que tenemos que sobreescribir el metodo validate,
 * este método lanzará una petición a la API pasandole un email por parámetro, en caso de que el 
 * email crearemos un nuevo error 
 * @param control Recibe el email que introducimos en el formulario
 * @returns una promesa la cual asigna un error a email en caso de que este ya se este utilizando
 */
   validate( control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;
    let respuesta : string ="";
    console.log(email);
    return this.http.get<any[]>(`http://localhost:8080/usuario?email=${ email}`)
                .pipe(
                  //Timpo de respuesta en comprobar el resultado
                   delay(1500),
                  map( resp => {
                    if(resp != null && resp.length == undefined){
                                respuesta = "valido";
                      
                                control.get("email")?.setErrors({ emailTomado: true });
                          return { emailTomado: true }
                              }
                              else{
                      
                                control.get("email")?.setErrors(null);
                         respuesta = "noValido";
                         return null
                              }
                  })
                );

  }
    
}
