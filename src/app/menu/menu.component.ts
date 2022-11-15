import { Component, Input, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http' 



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  // @Input() titulo; //Para asociar una variable a un parametro concreto.
  // //Este componente el que lo llame puede pasar un parametro

  @Input() ciudad:String;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(public http: HttpClient, private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
  }
todo;
listadetodos=[];

peticion(ciudad){//realizamos una peticion, nos devolverá un array
  this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+ciudad+'&appid=YOUR-API-KEY').subscribe(
    resultado => {
      this.todo = resultado;
      console.log(this.todo = this.todo);
     return  this.todo = this.todo.weather;

      // this.todo = this.todo.
      //this.evento.emit("Notifico que esto es una peti");
    }
  );
  
  // JSON.stringify(this.serv.todo);
}

}
