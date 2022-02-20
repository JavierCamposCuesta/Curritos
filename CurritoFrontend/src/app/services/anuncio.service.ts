import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Anuncio } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {
  private baseUrl: string = environment.baseUrl; 

   private headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('jwt')}` || '' );


  constructor(private http: HttpClient) {}

  /**
   * Método para pedir todas las categorias
   * @returns lista con todas las categorias
   */
  misAnuncios(){
    const url = `${this.baseUrl}/profile/mis-anuncios`;

    const headers = this.headers;
      return this.http.get<Anuncio[]>(url, {headers});
    
  }

  /**
   * Método para registrar usuarios, recibe un usuario y lanza la peticion a la API
   * @param user 
   * @returns Un observable con el resultado de la petición
   */
 addAnuncio(anuncio:Anuncio){
  const url = `${this.baseUrl}/anuncio`;
  const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${localStorage.getItem('jwt')}` || '' );
    return this.http.post(url, anuncio, {headers});
}

 /**
   * Método para registrar usuarios, recibe un usuario y lanza la peticion a la API
   * @param user 
   * @returns Un observable con el resultado de la petición
   */
  editAnuncio(anuncio:Anuncio){
    const url = `${this.baseUrl}/anuncio/${anuncio.id}`;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('jwt')}` || '' );
      return this.http.put(url, anuncio, {headers});
  }

  borrarAnuncio(idAnuncio:number){
    const url = `${this.baseUrl}/anuncio/${idAnuncio}`;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('jwt')}` || '' );
      return this.http.delete(url, {headers});
  }




}