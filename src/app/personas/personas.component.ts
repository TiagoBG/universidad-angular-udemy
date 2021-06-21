import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl:'./personas.component.html',
    styleUrls:['./personas.component.css']
})
export class PersonasComponent{
    deshabilitar = false;
    mensaje='No se ha agregado ninguna persona aún';
    titulo = 'Snr/Snra';
    

    agregarPersona(){
        this.mensaje = 'Persona agregada exitosamente';
        this.deshabilitar = true;
    }

    modificarTitulo(event: Event){
        this.titulo = (<HTMLInputElement>event.target).value;
    }

}