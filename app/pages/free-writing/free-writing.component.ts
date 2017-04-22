import { Component } from "@angular/core";
import { Page } from "ui/page";
import { TNSTextToSpeech, SpeakOptions } from 'nativescript-texttospeech';
import { SpeakConfig } from '../../shared/config/speech-config';

@Component({
    selector: "ns-free-writing",
    templateUrl: "./pages/free-writing/free-writing.component.html",
})

export class FreeWritingComponent {

    private TTS = new TNSTextToSpeech();
    private speakConfig = new SpeakConfig;
    private speakOptions : SpeakOptions = this.speakConfig.speakOptionsDefault;
    private _isSpeaking : boolean = false;
    private _tmpSpeechText : string = '';

    constructor(private page: Page) {

        page.actionBarHidden = true;

    }

    // getters / setters
    get isSpeaking() : boolean {
        return this._isSpeaking;
    }

    set isSpeaking(status : boolean) {
        this._isSpeaking = status;
    }

    get tmpSpeechText() : string {
        return this._tmpSpeechText;
    }

    set tmpSpeechText(theText : string) {
        this._tmpSpeechText = theText;
    }

    /**
     * Checks if there's something to say
     */
    isThereSomethingToSay() : boolean {

        if(typeof this.tmpSpeechText == undefined) {
            return false;
        }
        else if(!this.tmpSpeechText.length) {
            return false;
        }
        else {
            return true;
        }

    }

    /**
     * Convert to lowercase so it is correctly spoken (Android)
     */
    private fixAndroidUppercaseGlitch() : void {

        if(this.page.android) {
            this.speakOptions.text = this.tmpSpeechText.toLowerCase();
        }

    }

    /**
     * Check if the Speak Button is disabled
     */
    private isSpeakButtonDisabled() : boolean {
        return this.isSpeaking || !this.isThereSomethingToSay();
    }

    /**
     * Check if the Speak Button is enabled
     */
    private isSpeakButtonEnabled() : boolean {
        return this.isThereSomethingToSay() && !this.isSpeaking;
    }

    /**
     * Speak
     */
    emmaSpeak() : void {

        if(this.isSpeaking) {
            return;
        }
        else if(this.isSpeakButtonEnabled()) {

            // I can't make the speakOptions callback work,
            // so I will "fix" this with a timeout...
            setTimeout(()=> {
                this.isSpeaking = false;
            }, 2000);

            this.fixAndroidUppercaseGlitch();
            this.isSpeaking = true;
            this.TTS.speak(this.speakOptions);

        }

    }

}
