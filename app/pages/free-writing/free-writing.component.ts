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

    constructor(private page: Page) {
        page.actionBarHidden = true;
    }

    /**
     * Speak
     */
    emmaSpeak() : void {
        this.TTS.speak(this.speakOptions);
    }

}
