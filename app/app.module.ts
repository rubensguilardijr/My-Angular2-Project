import { NgModule } from '@angular/core' /*Módulo Base do Angular*/
import { FormsModule } from '@angular/forms' /*Controle de Forms e Inputs*/
import { BrowserModule } from '@angular/platform-browser' /*Inicializa Aplicação*/
import { RouterModule, Routes } from '@angular/router' /*Controle das Rotas*/

import {AppComponent} from './Component/app.component'
import {TesterComponent} from './Component/testerComponent/tester.component'

//Criando Rotas
const routes:Routes = [
  // Caminho,         Template,                Dados
  {path: '', component: TesterComponent, data: {test: 'test'}}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, TesterComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {}
