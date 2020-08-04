import { Injectable,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  

  todo;
  // categoria:[];
  constructor(public http:HttpClient) {
    
  }
  peti(categoria) {
    this.http.get('https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=8e0121aa4ee249018a70ff28eb5a0c6e&category='+categoria+'').subscribe(
    resultado => {
     this.todo = resultado;
   })
   return this.todo; 
  }

}
