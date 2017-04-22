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
     * Speak
     */
    FreeWritingComponent.prototype.emmaSpeak = function () {
        var _this = this;
        if (this.isSpeaking) {
            return;
        }
        else if (this.isSpeakButtonEnabled()) {
            // I can't make the speakOptions callback work,
            // so I will "fix" this with a timeout...
            setTimeout(function () {
                _this.isSpeaking = false;
            }, 2000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJlZS13cml0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZyZWUtd3JpdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQUMxQyxnQ0FBK0I7QUFDL0IsdUVBQTBFO0FBQzFFLG1FQUFnRTtBQU9oRSxJQUFhLG9CQUFvQjtJQVE3Qiw4QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFOdEIsUUFBRyxHQUFHLElBQUksMkNBQWUsRUFBRSxDQUFDO1FBQzVCLGdCQUFXLEdBQUcsSUFBSSwyQkFBVyxDQUFDO1FBQzlCLGlCQUFZLEdBQWtCLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUM7UUFDbkUsZ0JBQVcsR0FBYSxLQUFLLENBQUM7UUFDOUIsbUJBQWMsR0FBWSxFQUFFLENBQUM7UUFJakMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFFaEMsQ0FBQztJQUdELHNCQUFJLDRDQUFVO1FBRGQsb0JBQW9CO2FBQ3BCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQUVELFVBQWUsTUFBZ0I7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDOUIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSwrQ0FBYTthQUFqQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7YUFFRCxVQUFrQixPQUFnQjtZQUM5QixJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztRQUNsQyxDQUFDOzs7T0FKQTtJQU1EOztPQUVHO0lBQ0gsb0RBQXFCLEdBQXJCO1FBRUksRUFBRSxDQUFBLENBQUMsT0FBTyxJQUFJLENBQUMsYUFBYSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO0lBRUwsQ0FBQztJQUVEOztPQUVHO0lBQ0ssd0RBQXlCLEdBQWpDO1FBRUksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUQsQ0FBQztJQUVMLENBQUM7SUFFRDs7T0FFRztJQUNLLG9EQUFxQixHQUE3QjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDNUQsQ0FBQztJQUVEOztPQUVHO0lBQ0ssbURBQW9CLEdBQTVCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUM1RCxDQUFDO0lBRUQ7O09BRUc7SUFDSCx3Q0FBUyxHQUFUO1FBQUEsaUJBbUJDO1FBakJHLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRWxDLCtDQUErQztZQUMvQyx5Q0FBeUM7WUFDekMsVUFBVSxDQUFDO2dCQUNQLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQzVCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUVULElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV0QyxDQUFDO0lBRUwsQ0FBQztJQUVMLDJCQUFDO0FBQUQsQ0FBQyxBQWpHRCxJQWlHQztBQWpHWSxvQkFBb0I7SUFMaEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsV0FBVyxFQUFFLGtEQUFrRDtLQUNsRSxDQUFDO3FDQVU0QixXQUFJO0dBUnJCLG9CQUFvQixDQWlHaEM7QUFqR1ksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgVE5TVGV4dFRvU3BlZWNoLCBTcGVha09wdGlvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtdGV4dHRvc3BlZWNoJztcbmltcG9ydCB7IFNwZWFrQ29uZmlnIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbmZpZy9zcGVlY2gtY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtZnJlZS13cml0aW5nXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9mcmVlLXdyaXRpbmcvZnJlZS13cml0aW5nLmNvbXBvbmVudC5odG1sXCIsXG59KVxuXG5leHBvcnQgY2xhc3MgRnJlZVdyaXRpbmdDb21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBUVFMgPSBuZXcgVE5TVGV4dFRvU3BlZWNoKCk7XG4gICAgcHJpdmF0ZSBzcGVha0NvbmZpZyA9IG5ldyBTcGVha0NvbmZpZztcbiAgICBwcml2YXRlIHNwZWFrT3B0aW9ucyA6IFNwZWFrT3B0aW9ucyA9IHRoaXMuc3BlYWtDb25maWcuc3BlYWtPcHRpb25zRGVmYXVsdDtcbiAgICBwcml2YXRlIF9pc1NwZWFraW5nIDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3RtcFNwZWVjaFRleHQgOiBzdHJpbmcgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge1xuXG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcblxuICAgIH1cblxuICAgIC8vIGdldHRlcnMgLyBzZXR0ZXJzXG4gICAgZ2V0IGlzU3BlYWtpbmcoKSA6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNTcGVha2luZztcbiAgICB9XG5cbiAgICBzZXQgaXNTcGVha2luZyhzdGF0dXMgOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzU3BlYWtpbmcgPSBzdGF0dXM7XG4gICAgfVxuXG4gICAgZ2V0IHRtcFNwZWVjaFRleHQoKSA6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl90bXBTcGVlY2hUZXh0O1xuICAgIH1cblxuICAgIHNldCB0bXBTcGVlY2hUZXh0KHRoZVRleHQgOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdG1wU3BlZWNoVGV4dCA9IHRoZVRleHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZXJlJ3Mgc29tZXRoaW5nIHRvIHNheVxuICAgICAqL1xuICAgIGlzVGhlcmVTb21ldGhpbmdUb1NheSgpIDogYm9vbGVhbiB7XG5cbiAgICAgICAgaWYodHlwZW9mIHRoaXMudG1wU3BlZWNoVGV4dCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCF0aGlzLnRtcFNwZWVjaFRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCB0byBsb3dlcmNhc2Ugc28gaXQgaXMgY29ycmVjdGx5IHNwb2tlbiAoQW5kcm9pZClcbiAgICAgKi9cbiAgICBwcml2YXRlIGZpeEFuZHJvaWRVcHBlcmNhc2VHbGl0Y2goKSA6IHZvaWQge1xuXG4gICAgICAgIGlmKHRoaXMucGFnZS5hbmRyb2lkKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWFrT3B0aW9ucy50ZXh0ID0gdGhpcy50bXBTcGVlY2hUZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBTcGVhayBCdXR0b24gaXMgZGlzYWJsZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIGlzU3BlYWtCdXR0b25EaXNhYmxlZCgpIDogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU3BlYWtpbmcgfHwgIXRoaXMuaXNUaGVyZVNvbWV0aGluZ1RvU2F5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIFNwZWFrIEJ1dHRvbiBpcyBlbmFibGVkXG4gICAgICovXG4gICAgcHJpdmF0ZSBpc1NwZWFrQnV0dG9uRW5hYmxlZCgpIDogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVGhlcmVTb21ldGhpbmdUb1NheSgpICYmICF0aGlzLmlzU3BlYWtpbmc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3BlYWtcbiAgICAgKi9cbiAgICBlbW1hU3BlYWsoKSA6IHZvaWQge1xuXG4gICAgICAgIGlmKHRoaXMuaXNTcGVha2luZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5pc1NwZWFrQnV0dG9uRW5hYmxlZCgpKSB7XG5cbiAgICAgICAgICAgIC8vIEkgY2FuJ3QgbWFrZSB0aGUgc3BlYWtPcHRpb25zIGNhbGxiYWNrIHdvcmssXG4gICAgICAgICAgICAvLyBzbyBJIHdpbGwgXCJmaXhcIiB0aGlzIHdpdGggYSB0aW1lb3V0Li4uXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTcGVha2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG5cbiAgICAgICAgICAgIHRoaXMuZml4QW5kcm9pZFVwcGVyY2FzZUdsaXRjaCgpO1xuICAgICAgICAgICAgdGhpcy5pc1NwZWFraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuVFRTLnNwZWFrKHRoaXMuc3BlYWtPcHRpb25zKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiJdfQ==