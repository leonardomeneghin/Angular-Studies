import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component'; //Local de onde acessar o código de cursos.component
//BOA PRÁTICA: Pular uma linha e separar nossos componentes é boas práticas em Angular.
//Modulo de funcionalidade
//CLI command
// ng g m <nomeModulo>

@NgModule({ //Ao adicionar o componente, foi adicionado aqui automaticamente.
  declarations: [
    CursosComponent,
    CursosDetalheComponent 
  ],
  imports: [
    CommonModule
  ],
  exports:[ //Quais são os declarators (componentes, botões, etc) que serão exportados
    CursosComponent
  ]
})
export class CursosModule { }
