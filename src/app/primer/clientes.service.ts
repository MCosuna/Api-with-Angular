import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
todo;
  constructor(public http:HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(
      // this.http.get('https://newsapi.org/v2/top-headlines?' +
      // 'country=us&' +
      // 'apiKey=YOUR-API-KEY').subscribe(

    resultado => {
      // console.log(JSON.stringify(this.todo))
     this.todo = resultado//almacenamos en this.todo el resultado de la peticion
      //this.evento.emit("Notifico que esto es una peti");
    }) 
  }
}
