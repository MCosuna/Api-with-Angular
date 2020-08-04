import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'borrar'
})
export class BorrarPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "diosa"+value; //Con pipe
  }

}
