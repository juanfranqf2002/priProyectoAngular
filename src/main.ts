import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MycomponentJQComponent } from './mycomponent-jq/mycomponent-jq.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, MycomponentJQComponent],
  templateUrl: './hola.html',
})
export class App {
  name = 'Juan';
  cargo = 'estudiante';
  contador = 0;
  a = 0;
  b = 0;
  c = 0;
  d = 0;
  e = 0;

  calcular() {
    this.contador = this.contador + 1;
    console.log('hello world ' + this.a);
    this.c = eval('' + this.a) + eval('' + this.b);
  }
  calcularR() {
    this.contador = this.contador + 1;
    console.log('hello world ' + this.a);
    this.d = eval('' + this.a) - eval('' + this.b);
  }
  calcularM() {
    this.contador = this.contador + 1;
    console.log('hello world ' + this.a);
    this.e = eval('' + this.a) * eval('' + this.b);
  }

  onChildEventHandler(event: string) {
    console.log(`Received event from child: ${event}`);
  }
}

bootstrapApplication(App);
