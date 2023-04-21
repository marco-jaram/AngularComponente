import { Component } from "@angular/core";
@Component({
   selector: 'app-body',
   templateUrl: './body.component.html'
})
export class BodyComponent{
   mostrar: boolean;
   constructor(){
      this.mostrar=true;
   }


   frase: any = {
      mensaje: 'La esencia precede a la esencia',
      autor: 'J.P. Sartre'
   };
    personajes: string[] = ['Sartre', 'Foucault', 'Laclau']
}