import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  //Aqui estamos haciendo una inyeccion de dependencia de este servicio, se lo hace en el constructor

  //No es buena practica poner los servicios public, tienen que ser privados, pero al cambiarlo a private. en el html MAIN-PAGE, las referencias que antes pusimos dbzSrvice.algunMetodo, ya no funcionan.

  //Lo que se tiene que hacer es hacer metodos como getter o setters, u otros para redireccionar a nuestro servicio.

  constructor( private dbzService: DbzService ){

  }

  get characters (): Character[] {
    //Se realizo de esta manera, para no modificar directamente a la data del servicio, por el momento enviaremos una copia de este arreglo. Aunque en la vida real estos datos se recibiran tal vez de una base de datos o una api rest, de lo cual si se necesita modificar esa data directamente.
    return [...this.dbzService.characters];
  }

  onDeleteCharacter ( id:string ):void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter (character: Character): void {
    this.dbzService.addCharacter(character);
  }


}
