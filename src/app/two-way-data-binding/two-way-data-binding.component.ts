import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent {
  temaSeleccionado: string = 'lightTheme';

  getClaseTema(): any {
    if (this.temaSeleccionado === 'darkTheme') {
      return { darkTheme: true };
    } else if (this.temaSeleccionado === 'highContrastTheme') {
      return { highContrastTheme: true };
    } else {
      return { lightTheme: true };
    }
  }
}
