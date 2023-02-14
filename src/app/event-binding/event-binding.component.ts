import { CompilerConfig } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
    selector: 'app-event-binding',
    templateUrl: './event-binding.component.html',
    styleUrls: ['./event-binding.component.css']
})

export class EventBindingComponent{
    name: string;
    constructor(){
        this.name = 'Asia';
    }

    aCantar():void {
        const textIntro = new Array(16).join(NaN.toString()) + ' Batman!';
        const configSpeech = new SpeechSynthesisUtterance(textIntro);
        configSpeech.rate = 0.8;
        window.speechSynthesis.speak(configSpeech);
    }

    changeText(event: any): void {
        event.target.innerHTML = 'Button clicked by ' + this.name;
    }
}