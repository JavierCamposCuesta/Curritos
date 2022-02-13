import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService 
//  implements AsyncValidator 
{

  constructor( private http: HttpClient ) { }

  // ( control: AbstractControl): Observable<ValidationErrors | null> {

  //   const email = control.value;
  //   console.log(email);
  //   return this.http.get<any[]>(`http://localhost:8080/usuario?q=${ email }`)
  //               .pipe(
                  
  //                 map( resp => {
                   
  //                   return ( resp.length === 0 ) 
  //                       ? null
  //                       : { emailTomado: true }
  //                 })
                  
                  
  //               )

  // }

//   validate(state: RouterStateSnapshot, control: AbstractControl):  Observable<ValidationErrors | null>  {
        
//     console.log("entra en guardian")
   
//    // //Llamar a la api y suscribirse (pasando por el servicio)

   
//    const email = control.value;
//    return this.http.get<any[]>(`http://localhost:8080/usuario?q=${ email }`).pipe(

//        map( resp=>{

//            console.log(resp + "ha comprobado el token")
//            return true;
//        }),
//        catchError(error =>{
//            console.log("hay un error"+error);

//            // this.router.navigateByUrl('/login');

//            return of(false)
//        })
//    )
   
//    // return true;
// }
}

