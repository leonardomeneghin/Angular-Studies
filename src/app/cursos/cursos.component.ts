import { Component, OnInit } from '@angular/core';
//CLI
//ng g c <nomeDoComponente>

@Component({
  selector: 'app-cursos', //Seletor que vira tag HTML (conceito de web components) boa prática web a ser seguida.
  templateUrl: './cursos.component.html', //Template a ser renderizado na tela
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{
  nomePortal: string = "https://loiane.training";
  cursos: string[] = ['Java', 'JS', 'Angular']

ngOnInit(): void {
  
}
}
