import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import {HttpClient} from '@angular/common/http' // para que mi componente reconozca 
import { ClientesService } from './clientes.service';
//Importamos el routerLinkActive para poder usarlo en el componente deseado

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  listadetodos=[];
  // @Input() titulo:String;
// collection = ["general", "sports"];
// @Input()categoria: String;
  categoria = '';
  lista;
@Output()
evento = new EventEmitter<string>();

  constructor(public http: HttpClient, public serv: ClientesService) {
    
   }

  ngOnInit(): void {
  }

  peticion(){
    console.log(this.categoria)
    this.lista=this.serv.peti(this.categoria);
    this.lista=this.lista.articles
    console.log(this.lista.articles)
    //realizamos una peticion que nos devolverá un array
    // this.selectedHero = this.selectedHero;
    // this.http.get('https://fakerestapi.azurewebsites.net/api/Books').subscribe(
    //   resultado => {
    //     console.log(resultado)
    //     //this.evento.emit("Notifico que esto es una peti");
    //   }
    // );
    // this.listadetodos.push(this.serv.todo)
    
    //convertir el JSON
    
    /* JSON.stringify(this.serv.todo); */
    // this.listadetodos = this.serv.todo;

    // this.listadetodos = this.serv.todo;
    /* setTimeout(() => {
      this.listadetodos
    }, 600000);//10 minutos
    console.log(JSON.stringify(this.serv.todo)) *///Hacer un ng for para mostrar el array
  }
  
  

}
