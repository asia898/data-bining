import { Component } from '@angular/core';

@Component({
    selector: 'app-string-interpolation',
    templateUrl: './string-interpolation.component.html'
})

export class StringInterpolationComponent {
    name: string = 'Sara';
    serie1: string = 'Outlander';
    serie2: string = 'Mandalorian';
    serie3: string = 'Parks and Recreation';
    partSerie4: string = 'The Last';

    getSerie2(): string {
        return this.serie2;
    }
}