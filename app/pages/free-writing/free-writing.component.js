"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var nativescript_texttospeech_1 = require("nativescript-texttospeech");
var speech_config_1 = require("../../shared/config/speech-config");
var FreeWritingComponent = (function () {
    function FreeWritingComponent(page) {
        this.page = page;
        this.TTS = new nativescript_texttospeech_1.TNSTextToSpeech();
        this.speakConfig = new speech_config_1.SpeakConfig;
        this.speakOptions = this.speakConfig.speakOptionsDefault;
        this.tmpSpeechText = '';
        page.actionBarHidden = true;
    }
    /**
     * Speak
     */
    FreeWritingComponent.prototype.emmaSpeak = function () {
        if (typeof this.tmpSpeechText == undefined) {
            return false;
        }
        else if (!this.tmpSpeechText.length) {
            return false;
        }
        else {
            // Convert to lowercase so it is correctly spoken (Android)
            this.speakOptions.text = this.tmpSpeechText.toLowerCase();
            this.TTS.speak(this.speakOptions);
            return true;
        }
    };
    return FreeWritingComponent;
}());
FreeWritingComponent = __decorate([
    core_1.Component({
        selector: "ns-free-writing",
        templateUrl: "./pages/free-writing/free-writing.component.html",
    }),
    __metadata("design:paramtypes", [page_1.Page])
], FreeWritingComponent);
exports.FreeWritingComponent = FreeWritingComponent;
