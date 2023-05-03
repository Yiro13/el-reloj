import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  nombre: string = '';
  email: string = '';
  mensaje: string = '';

  enviarFormulario() {
    // Aquí iría el código para enviar el formulario
    alert('¡Formulario enviado!');
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
  }
}
