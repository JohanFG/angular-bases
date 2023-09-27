import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'IronMan';
  public age: number = 45;

  //Por ejemplo este metodo get, nos devolvera nuestro nombre en mayusculas, que para eso se utiliza toUpperCase. Ademas los metodos get y set, se comportan como propiedades (apesar de ser metodos), es decir, no es necesario ponerle las () al final
  get capitalizedName (): string {
    return this.name.toUpperCase()
  }

  //Por ejemplo si pongo private en la definicion de este metodo, no se va a poder acceder desde el html del hero.component, ya que los objetos privados solo funcionan dentro de la definicion de esta clase.
  getHeroDescription (): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 20;
  }

}
