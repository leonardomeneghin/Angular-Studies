import { Component } from '@angular/core'; //Component vem daqui :) e esse import é do ecmascript


//Uso de decorator (idem anotation), passa informações ao transpilador
@Component({
    //Meta dados aqui
    selector: 'meu-primeiro-component', //Uso de webcomponents que permite criar componentes html customizados (angular é baseado nisso 100%7)
    template: `
        <p>Meu Primeiro componente em angular</p>
    `,
    
}) //Parâmetros aqui são chamados de meta dados, vem do ecmascript
export class MeuPrimeiroComponent{ //Sintaxe de criação de classes ecmascript
    

}