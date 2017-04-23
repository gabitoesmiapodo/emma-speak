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
     * Get how much time to speak
     */
    getSpeakingLength() : number {
        // this takes the characters amount, multiplies it by a set number (0.1)
        // and then by 1000 to get how many milliseconds the app is "talking"
        // this seems to work fine on Android, but it surely will break eventually...
        // I will fix this when I understand how the TTS callback works
        return this.tmpSpeechText.length * 0.1 * 1000;
    }

    /**
     * Speak
     */
    emmaSpeak() : void {

        if(this.isSpeaking) {
            return;
        }
        else if(this.isSpeakButtonEnabled()) {

            // I can't get this to work...
            // Seems to work fine according to console.log(this.isSpeaking)
            // But inputs won't get cleared
            // this.speakOptions.finishedCallback = ()=> {
            //     console.log(this.isSpeaking) // shows true (OK)
            //     this.isSpeaking = false;
            //     console.log(this.isSpeaking) // shows false (OK)
            // };

            // I can't make the above speakOptions callback work,
            // so I will "fix" this with a timeout...
            setTimeout(()=> {
                this.isSpeaking = false;
            }, this.getSpeakingLength());

            this.fixAndroidUppercaseGlitch();
            this.isSpeaking = true;
            this.TTS.speak(this.speakOptions);

        }

    }

}
