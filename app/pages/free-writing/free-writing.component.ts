import { Component } from "@angular/core";
import * as application from "application";
import { Page } from "ui/page";
import { TNSTextToSpeech, SpeakOptions } from 'nativescript-texttospeech';

@Component({
    selector: "ns-free-writing",
    templateUrl: "./pages/free-writing/free-writing.component.html",
})

export class FreeWritingComponent {

    TTS = new TNSTextToSpeech();
    speakOptions: SpeakOptions;

    constructor() {

        let speakRate : number;

        // Speak rate works diferent on android and ios
        if (application.android) {
            speakRate = 0.8;
        }
        else if (application.ios) {
            speakRate = 0.1;
        }

        this.speakOptions = {
            language: "es",
            pitch: 1.3,
            speakRate: speakRate,
            text: '',
            volume: 1.0
        }

    }

    /**
     * Speak
     */
    emmaSpeak() : void {
        this.TTS.speak(this.speakOptions);
    }

}
