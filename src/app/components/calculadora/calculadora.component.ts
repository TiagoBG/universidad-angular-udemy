import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  operandoA = 0;
  operandoB = 0;
  resultado = 0;

/*   Form Group
 */  operandoAFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('(^-?0\.[0-9]*[1-9]+[0-9]*$)|(^-?[1-9]+[0-9]*((\.[0-9]*[1-9]+[0-9]*$)|(\.[0-9]+)))|(^-?[1-9]+[0-9]*$)|(^0$){1}')
  ]);

  operandoBFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('(^-?0\.[0-9]*[1-9]+[0-9]*$)|(^-?[1-9]+[0-9]*((\.[0-9]*[1-9]+[0-9]*$)|(\.[0-9]+)))|(^-?[1-9]+[0-9]*$)|(^0$){1}')
  ]);
  
  sumarOperandos():number{
    this.resultado = parseInt(Math.round(this.operandoA + this.operandoB * 100 / 100).toFixed(4))
    console.log(this.resultado)
    return this.resultado
  }
}
