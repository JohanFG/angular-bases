import { Component, EventEmitter, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  //En este caso estamos emitiendo mediante el formulario, un objeto al padre para que se pueda actualizar el listado de personajes. Para hacer esto utilizamos el EventEmitter, Output (vienen de angular/core).

  //Aqui podemos ver como se instancia un emisor

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter (): void{

    //Herramienta muy util para hacer un debugging de la aplicacion, se detiene en ese punto, y ademas en el navegador nos muestra en que parte del codigo estamos. Y aqui tambien podemos adicionar breakpoints adicionales.

    //debugger;

    console.log(this.character);

    //Verificamos que no nos envien algo vacio
    if (this.character.name.length === 0) return;

    // Y luego mediante el objeto instanciado anteriormente, que lo definimos de tipo Character, enviamos el this.character

    this.onNewCharacter.emit(this.character);

    //Acostumbrarse a que el codigo sea mas eficiente, en vez de poner las dos lineas siguientes, se puede hacer en una sola linea, y asi mejoramos.

    //this.character.name = '';
    //this.character.power = 0;

    this.character = {name: '', power: 0};
  }
}
