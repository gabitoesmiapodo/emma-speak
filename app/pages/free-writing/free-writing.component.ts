import { Component } from "@angular/core";
import { Page } from "ui/page";
import { TNSTextToSpeech, SpeakOptions } from 'nativescript-texttospeech';

@Component({
    selector: "ns-free-writing",
    templateUrl: "./pages/free-writing/free-writing.component.html",
})

export class FreeWritingComponent {

    messageSpeak: string;
    theText: string;
    TTS = new TNSTextToSpeech();
    speakOptions: SpeakOptions;

    constructor() {

        this.messageSpeak = "Hola Emma... ¿Cómo estás?"
        this.theText = "";

        this.speakOptions = {
            text: this.messageSpeak,
            speakRate: 0.3,
            pitch: 1.5,
            volume: 1.0,
            language: "es-ES"
        }

    }

    /**
     * Speak
     */
    emmaSpeak() {
        // Call the `speak` method passing the SpeakOptions object
        this.TTS.speak(this.speakOptions);
        this.theText = this.messageSpeak;
    }

}
