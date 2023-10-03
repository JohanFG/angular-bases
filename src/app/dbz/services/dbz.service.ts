//Este es un servicio en el cual debemos tener toda la informacion en la cual estoy trabajando, po ejemplo, aqui se va a colocar el arreglo de los personajes y los metodos que estan implementados.

//Algo importante desde Angular 6, en el decorador incluye esta propiedad PROVIDEDIN: 'root' por defecto, y es algo que es bueno ya que si no lo hace, todos los servicios que implementemos deberiamos declararlos en el app.module.ts, en la parte de providers del decorador.

import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

//Esta forma de importar librarias externas, importante saber, primero hicimos NPM I UUID, pero salia un error que no podia encontrar esa libreria, por lo que nos recomendo hacer un npm i --save-dev @types/uuid. El metodo que nos interesa utilizar es el V4, que nos sirve para generar IDs unicos para cada personaje.

//Y tambien algo muy util es que se puede renombrar los metodos de una importacion con la palabra AS. Como podemos ver a continuacion.

//IMPORTANTE: Se tiene que cambiar la interface que definimos anteriormente, que es la definicion de como son nuestros objetos de tipo Character
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  //Aqui definimos el arreglo el cual vamos a enviar al hijo que es list.component (ESTO ERA ANTES DE HACERLO UN SERVICIO, CUANDO TODO ESTE CODIGO ESTABA EN EL MAIN PAGE)
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name:'Vegeta',
    power: 7500
  }];

  addCharacter ( character: Character): void {

    //Este es uno de las ventajas de tener centralizado en un servicio estos tipos de metodos, si se crea un nuevo personaje, aqui podemos definir su id, para todos los elementos que se creen en el formulario.

    //Una forma de crear los objetos con id nuevos, es por ejemplo desestructurar el caracter y crearlo asi:
    /*
    En la definicion del metodo ----   ({name, power}: Character): void {

      const newCharacter: Character = {
        id:uuid(),
        name,
        power
      }
    }
      ES CORRECTO, PERO IMAGINENSE QUE ESE OBJETO CHARACTER TIENE 30 ATRIBUTOS, SE VOLVERIA MUY INNECESARIO DESESTRUCTURAR.
    */


    //Utilizando el operador spreed, que son ...  Le decimos que coja todos los atributos y los esparza en este objeto.
    const newCharacter: Character = {id: uuid(), ...character};

    this.characters.push(newCharacter);
  }

  /*onDeleteCharacter (index: number): void{
    this.characters.splice(index, 1);
  }*/

  deleteCharacterById (id: string): void{
      this.characters = this.characters.filter(character => character.id !== id);
  }

}
