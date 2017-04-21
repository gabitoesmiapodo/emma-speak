import { Component } from "@angular/core";
import { Page } from "ui/page";
import { TNSTextToSpeech, SpeakOptions } from 'nativescript-texttospeech';
import { SpeakConfig } from '../../shared/config/speech-config';

@Component({
    selector: "ns-free-writing",
    templateUrl: "./pages/free-writing/free-writing.component.html",
})

export class FreeWritingComponent {

    TTS = new TNSTextToSpeech();
    speakConfig = new SpeakConfig;
    speakOptions: SpeakOptions = this.speakConfig.speakOptionsDefault;
    tmpSpeechText : string = '';

    constructor(private page: Page) {
        page.actionBarHidden = true;
    }

    /**
     * Speak
     */
    emmaSpeak() : boolean {

        if(typeof this.tmpSpeechText == undefined) {
            return false;
        }
        else if(!this.tmpSpeechText.length) {
            return false;
        }
        else {

            // Convert to lowercase so it is correctly spoken (Android)
            this.speakOptions.text = this.tmpSpeechText.toLowerCase();
            this.TTS.speak(this.speakOptions);

            return true;

        }

    }

}
