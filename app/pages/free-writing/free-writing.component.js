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
        this._isSpeaking = false;
        this._tmpSpeechText = '';
        page.actionBarHidden = true;
    }
    Object.defineProperty(FreeWritingComponent.prototype, "isSpeaking", {
        // getters / setters
        get: function () {
            return this._isSpeaking;
        },
        set: function (status) {
            this._isSpeaking = status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FreeWritingComponent.prototype, "tmpSpeechText", {
        get: function () {
            return this._tmpSpeechText;
        },
        set: function (theText) {
            this._tmpSpeechText = theText;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Checks if there's something to say
     */
    FreeWritingComponent.prototype.isThereSomethingToSay = function () {
        if (typeof this.tmpSpeechText == undefined) {
            return false;
        }
        else if (!this.tmpSpeechText.length) {
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * Convert to lowercase so it is correctly spoken (Android)
     */
    FreeWritingComponent.prototype.fixAndroidUppercaseGlitch = function () {
        if (this.page.android) {
            this.speakOptions.text = this.tmpSpeechText.toLowerCase();
        }
    };
    /**
     * Check if the Speak Button is disabled
     */
    FreeWritingComponent.prototype.isSpeakButtonDisabled = function () {
        return this.isSpeaking || !this.isThereSomethingToSay();
    };
    /**
     * Check if the Speak Button is enabled
     */
    FreeWritingComponent.prototype.isSpeakButtonEnabled = function () {
        return this.isThereSomethingToSay() && !this.isSpeaking;
    };
    /**
     * Get how much time to speak
     */
    FreeWritingComponent.prototype.getSpeakingLength = function () {
        // this takes the characters amount, multiplies it by a set number (0.1)
        // and then by 1000 to get how many milliseconds the app is "talking"
        // this seems to work fine on Android, but it surely will break eventually...
        // I will fix this when I understand how the TTS callback works
        return this.tmpSpeechText.length * 0.1 * 1000;
    };
    /**
     * Speak
     */
    FreeWritingComponent.prototype.emmaSpeak = function () {
        var _this = this;
        if (this.isSpeaking) {
            return;
        }
        else if (this.isSpeakButtonEnabled()) {
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
            setTimeout(function () {
                _this.isSpeaking = false;
            }, this.getSpeakingLength());
            this.fixAndroidUppercaseGlitch();
            this.isSpeaking = true;
            this.TTS.speak(this.speakOptions);
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
