import { SpeakOptions } from 'nativescript-texttospeech';
import * as application from "application";

export class SpeakConfig {

    private speakOptionsConfig : SpeakOptions = {
            language: "es",
            pitch: 1.3,
            speakRate: application.android ? 0.8 : 0.1,
            text: '',
            volume: 1.0
        };

    get speakOptionsDefault() : SpeakOptions {
        return this.speakOptionsConfig;
    }

    constructor() {
        //
    }

}