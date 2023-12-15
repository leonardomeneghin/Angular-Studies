import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //Prepara o sistema para subir em navegador
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuSegundoComponenteComponent } from './meu-segundo-componente/meu-segundo-componente.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({ //Decoração da classe -> @NgModule :representa um módulo.
  declarations: [ //Meta dados das classes que serão usadas no projeto.
    AppComponent, //Componentes, diretivas e pipes estão aqui.
    MeuPrimeiroComponent,
    MeuSegundoComponenteComponent //Inserido o componente no módulo
  ],
  imports: [ //Outros módulos que utilizaremos nesse módulo.
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [], //Onde coloca-se os serviços que ficarão disponíveis para os componentes
  bootstrap: [AppComponent] //Componente que deve ser instanciado na hora de executar a aplicação.
})
export class AppModule { } //Declaração da classe cmascript 2015
