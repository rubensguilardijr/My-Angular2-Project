import { Component } from '@angular/core'

@Component({

  selector: 'tester',

  templateUrl: 'app/Component/testerComponent/tester.component.html',

  styleUrls: ['app/Component/testerComponent/tester.component.css'],

})

// Declara Classe do Componente
export class TesterComponent{
  name: string;
  // Two-Way Data Binding
  public teste:string = '';

  //Método Construtor da Classe, Instancia Serviços
  constructor(){
    this.name = 'Zam Smith';
  }

    //Envia Informações para o Serviço

    //Recupera informações do serviço

  }
  /*Código a ser utilizado pelo componente*/
  /*Normalmente relacionado com o controle do template e suas informações*/
