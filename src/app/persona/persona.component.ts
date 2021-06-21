import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  nombre:string = 'Rory';
  apellido: string = 'Camelo';
  edad: number = 27;

  //Para el caso de tener atributos privados se accede a ellos a través de métodos
  //Este método será llamado en el template como {{getEdad()}} y mostrará la información

 /*  private edad: number = 27;

  getEdad():number{
    return this.edad;
  } */
}
