import { Component } from '@angular/core';

@Component({
  selector: 'app-crea-tu-ngmodel',
  templateUrl: './crea-tu-ngmodel.component.html',
  styleUrls: ['./crea-tu-ngmodel.component.css']
})
export class CreaTuNgmodelComponent {
  nombre: string = 'Trafalgar D. Law';
  year: number = new Date().getFullYear();

  changeNombre(event: any): void {
    this.nombre = event.target.value;
  }
}
