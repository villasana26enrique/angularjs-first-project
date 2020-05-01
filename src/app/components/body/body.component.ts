import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{
    frase: any;
    mostrar: boolean;
    familiares: string[];
    texto: string;
    constructor() {
        this.frase = {
            mensaje: 'Ahora me ves!',
            autor: 'Enrique Villasana'
        };
        this.mostrar = true;
        this.familiares = ['Trina', 'Yezeina', 'Enrique', 'Maria Elisa', 'Jonathan', 'Junior'];
        this.texto = 'Mostrar/Ocultar';
    }
}
