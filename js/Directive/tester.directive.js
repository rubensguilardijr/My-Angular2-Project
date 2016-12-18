// Declaração de uma Diretiva de Exemplo
System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, core_2, ExampleDirective;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }
        ],
        execute: function () {// Declaração de uma Diretiva de Exemplo
            //Declara a classe da diretiva
            ExampleDirective = class ExampleDirective {
                //Função Construtora da Classe, Alimenta as variaveis com informações do elemento
                constructor(element, renderer) {
                    this.element = element;
                    this.renderer = renderer;
                    //Exemplo de um Método
                    this.onInput = function (input) {
                        /*Ação tomada após incerção de dados*/
                    };
                }
                // Função executada baseada no valor passado para a diretiva 'uiExample="valor"'
                set uiExample(value) {
                    /*Ações baseadas no valor recebido*/
                    this.renderer.setElementStyle(this.element.nativeElement, 'color', 'black');
                    this.renderer.setElementStyle(this.element.nativeElement, 'color', value);
                }
            };
            __decorate([
                core_2.Input(),
                __metadata("design:type", String),
                __metadata("design:paramtypes", [String])
            ], ExampleDirective.prototype, "uiExample", null);
            ExampleDirective = __decorate([
                core_1.Directive({
                    //Nome para a invocação da diretiva
                    selector: '[uiExample]',
                    //Ações para eventos declarados
                    host: {
                        '(input)': 'onInput($event.target.value)',
                    }
                }),
                __metadata("design:paramtypes", [core_2.ElementRef, core_2.Renderer])
            ], ExampleDirective);
            exports_1("ExampleDirective", ExampleDirective);
        }
    };
});
//# sourceMappingURL=tester.directive.js.map