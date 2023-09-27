import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

//Importante en el momenot de separa este modulo, dejo de funcionar las directivas nf-if, else, ng-template, debido a que esto pertenece a @angular/common, y eso esta por defecto en el modulo principal app.module.ts. Pero al momento de separarlos en modulos personalizados, es necesario, incluirlos en los imports del docorador y en los import de arriba.

@NgModule ({
  declarations: [
    HeroComponent,
    ListComponent,
  ],

  exports: [
    HeroComponent,
    ListComponent,
  ],

  imports: [
     CommonModule,
  ],
})
export class HeroesModule {

}
