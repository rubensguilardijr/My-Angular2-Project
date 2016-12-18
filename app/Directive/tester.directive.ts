// Declaração de uma Diretiva de Exemplo

// Importando Decorador @Directive de @Angular 2
import {Directive} from '@angular/core';

//Importa Classes para o controle do Elemento da Diretiva
import {Renderer, ElementRef, Input, Output} from '@angular/core';

//Define a Classe como uma Diretiva do Angular
@Directive({

  //Nome para a invocação da diretiva
  selector: '[uiExample]',

  //Ações para eventos declarados
  host: {
    '(input)': 'onInput($event.target.value)',
  }
})

//Declara a classe da diretiva
export class ExampleDirective {

  //Função Construtora da Classe, Alimenta as variaveis com informações do elemento
  constructor(private element:ElementRef, private renderer:Renderer){}

  //Exemplo de um Método
  public onInput = function(input:string):void{
    /*Ação tomada após incerção de dados*/
  }

  // Função executada baseada no valor passado para a diretiva 'uiExample="valor"'
  @Input() set uiExample(value:string){

    /*Ações baseadas no valor recebido*/

    this.renderer.setElementStyle(this.element.nativeElement, 'color', 'black');
    this.renderer.setElementStyle(this.element.nativeElement, 'color', value);
  }

  /*Código a ser utilizado dentro da diretiva*/
  /*Normalmente relacionado com eventos dentro do elemento*/
}
