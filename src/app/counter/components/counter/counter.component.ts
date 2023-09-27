// Existe una extension para crear rapidamente por ejemplo esta clase component, que el snnipets de angular. lo que se tiene que hacer es poner -a, y acontinuacion vas a tener un monton de opciones, para elegir.


import { Component } from "@angular/core";


@Component({
  //El selector no es mas que el nombre para utilizarlo en los archivos html, es bueno nombrarlo con el prefijo app-
  selector: 'app-counter',

  //Siempre es necesario definir el selector y el templateUrl (seria el archivo html), o en otro caso definir el template(que es definir algo de html en texto, como podemos ver)

  //Tambien es recomendable que si se va a separar en componentes, es bueno definir un html si este codigo supera las 5 lineas, de lo contrario podemos hacerlo con (` `), en la podemos escribir codigo html en multilinea.
  template: `
    <h3>Counter: {{counter}} </h3>

    <button (click)="increaseBy(1)"> +1 </button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)"> -1 </button>
  `,

})
export class CounterComponent
{
  public counter: number = 10;

  increaseBy (value: number):void {
    this.counter += value;
  }

  reset ():void {
    this.counter = 10;
  }


}


