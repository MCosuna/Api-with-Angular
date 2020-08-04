import { Directive, ElementRef, Input } from '@angular/core'; //Con elementRef introducimos el elemento,
//al constructor le pasamos este objeto. 

@Directive({
  selector: '[appDestacar]'
})
export class DestacarDirective {
  @Input() appDestacar:string;//Hemos definido un parametro de entrada y es el parametro que hemos definido para ver la entrada del color

  constructor(public el: ElementRef) {
    console.log(this.appDestacar)
   }
   ngOnInit(){//por defecto, coge el string de la app y le introduce un @input
    this.el.nativeElement.style.backgroundColor = this.appDestacar || "yellow"; //Lo introducimos dentro del contructor
  //si no le pasamos ningún parámetro en el HTML introduce amarillo por defecto. 
  }
}
