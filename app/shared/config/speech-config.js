"use strict";
var application = require("application");
var SpeakConfig = (function () {
    function SpeakConfig() {
        this.speakOptionsConfig = {
            language: "es",
            pitch: 1.3,
            speakRate: application.android ? 0.8 : 0.1,
            text: '',
            volume: 1.0
        };
        //
    }
    Object.defineProperty(SpeakConfig.prototype, "speakOptionsDefault", {
        get: function () {
            return this.speakOptionsConfig;
        },
        enumerable: true,
        configurable: true
    });
    return SpeakConfig;
}());
exports.SpeakConfig = SpeakConfig;
