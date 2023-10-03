import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //Este decorador nos permite definir algo que vamos a recibir del padre para poder presentarlo en el listado de personajes, como se puede ver se puede tener valores por defecto en el caso de que no reciba nada (aunque es recomendable dejar un objeto vacio). El nombre que va a tener esta variable puede ser la que definimos despues del public, o podemos renombrarla dentro de los parentesis del Input. Si vemos en el archivo html, hacemos uso de un ng-for, para recorrer este arreglo y presentar los datos que esten ahi.
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  //Emitimos hacia el padre, esta variable que es el index del elemento que quiero borrar.
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  //Este metodo es utilizado cuando presionamos algun boton de eliminacion
  onDeleteCharacter (id?: string): void {

    //Esta condicion es importante, por lo que el id es un atributo opcional en la definicion de la interface Character, entonces si no recibo nada, no se va a emitir nada, y salgo de la funcion
    if ( !id ) return;

    this.onDelete.emit(id);
  }

}
