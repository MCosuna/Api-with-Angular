import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';//
import {HttpClient} from '@angular/common/http' // para que mi componente reconozca 
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-primer',
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.css']
})
export class PrimerComponent implements OnInit {//Nos vamos dentro de la clase y nombramos al evento

@Input() titulo:String;

nombre: String = "Mari carmen";//variable, de tipo String.

@Output()
evento = new EventEmitter<string>();//Para emitir el evento

//Añadir evento on click
trataevento(){
  this.nombre = "pepe";
}

trataevento2(){
  this.evento.emit("evento lanzado");
}
selectedHero = true;
stringData: any;
heroes;
listadetodos=[];
correo = "";

  constructor(public http: HttpClient, public serv: ClientesService) { }//Le pasamos al construcction una inyeccion de dependencias
  //el sistema se da cuenta. Pides el objeto <<primerParametro>>.

  ngOnInit(): void {
  }

peticion(){
  JSON.stringify(this.serv.todo);
  this.listadetodos = this.serv.todo;
  console.log(JSON.stringify(this.serv.todo))//Hacer un ng for para mostrar el array
}

}
