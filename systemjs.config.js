//Arquivo de Configuração do System.JS
//Importação dos Arquivos necessários ao projeto

//Função Auto Invocavel
(function (global) {

  //Cria as Configurações
  System.config({

    //Atalhos para caminhos especificos
    paths: {

      //Atalho para modulos do Node
      'npm:': 'node_modules/',
    },

    //Onde Procurar
    map: {
      //Aplicação
      app: 'app/js',

      //Modulos do Angular
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      //Outras Bibliotecas
      'rxjs': 'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },

    //Informações de Importação
    packages: {
      //Aplicação
      app: {
        //Arquivo de Inicialização
        main: './main.js',

        //Extensão padrão para importação
        defaultExtension: 'js'
      },
      //Biblioteca RXJS
      rxjs: {
        //Extensão padrão para importação
        defaultExtension: 'js'
      }
    }
  });
})(this);
