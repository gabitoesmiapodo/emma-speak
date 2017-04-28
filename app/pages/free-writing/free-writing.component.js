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
    }
    /**
     * Initialize stuff
     */
    FreeWritingComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    /**
     * Animation is loaded
     * @param theElement
     */
    FreeWritingComponent.prototype.onAnimationLoaded = function (theElement) {
        this.faceAnimation = theElement;
        this.faceAnimation.stop();
    };
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
        // this takes the characters amount, multiplies it by a set nusmber (0.1)
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
                _this.faceAnimation.stop();
            }, this.getSpeakingLength());
            this.fixAndroidUppercaseGlitch();
            this.isSpeaking = true;
            this.faceAnimation.start();
            this.TTS.speak(this.speakOptions);
        }
    };
    return FreeWritingComponent;
}());
__decorate([
    core_1.ViewChild("faceAnimation"),
    __metadata("design:type", core_1.ElementRef)
], FreeWritingComponent.prototype, "faceAnimationElem", void 0);
FreeWritingComponent = __decorate([
    core_1.Component({
        selector: "ns-free-writing",
        templateUrl: "./pages/free-writing/free-writing.component.html"
    }),
    __metadata("design:paramtypes", [page_1.Page])
], FreeWritingComponent);
exports.FreeWritingComponent = FreeWritingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJlZS13cml0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZyZWUtd3JpdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5RTtBQUN6RSxnQ0FBK0I7QUFFL0IsdUVBQTBFO0FBQzFFLG1FQUFnRTtBQU9oRSxJQUFhLG9CQUFvQjtJQVc3Qiw4QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFQdEIsUUFBRyxHQUFHLElBQUksMkNBQWUsRUFBRSxDQUFDO1FBQzVCLGdCQUFXLEdBQUcsSUFBSSwyQkFBVyxDQUFDO1FBQzlCLGlCQUFZLEdBQWlCLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUM7UUFDbEUsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsbUJBQWMsR0FBVyxFQUFFLENBQUM7SUFHRixDQUFDO0lBRW5DOztPQUVHO0lBQ0gsdUNBQVEsR0FBUjtRQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUVyQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZ0RBQWlCLEdBQWpCLFVBQWtCLFVBQVU7UUFFeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUU3QixDQUFDO0lBR0Qsc0JBQUksNENBQVU7UUFEZCxvQkFBb0I7YUFDcEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDO2FBRUQsVUFBZSxNQUFlO1lBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQzlCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksK0NBQWE7YUFBakI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixDQUFDO2FBRUQsVUFBa0IsT0FBZTtZQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLE9B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bGVtZW50UmVmLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBUZXh0VmlldyB9IGZyb20gXCJ1aS90ZXh0LXZpZXdcIjtcbmltcG9ydCB7IFROU1RleHRUb1NwZWVjaCwgU3BlYWtPcHRpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRleHR0b3NwZWVjaCc7XG5pbXBvcnQgeyBTcGVha0NvbmZpZyB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb25maWcvc3BlZWNoLWNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWZyZWUtd3JpdGluZ1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvZnJlZS13cml0aW5nL2ZyZWUtd3JpdGluZy5jb21wb25lbnQuaHRtbFwiXG59KVxuXG5leHBvcnQgY2xhc3MgRnJlZVdyaXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQFZpZXdDaGlsZChcImZhY2VBbmltYXRpb25cIikgZmFjZUFuaW1hdGlvbkVsZW06IEVsZW1lbnRSZWY7XG5cbiAgICBwcml2YXRlIFRUUyA9IG5ldyBUTlNUZXh0VG9TcGVlY2goKTtcbiAgICBwcml2YXRlIHNwZWFrQ29uZmlnID0gbmV3IFNwZWFrQ29uZmlnO1xuICAgIHByaXZhdGUgc3BlYWtPcHRpb25zOiBTcGVha09wdGlvbnMgPSB0aGlzLnNwZWFrQ29uZmlnLnNwZWFrT3B0aW9uc0RlZmF1bHQ7XG4gICAgcHJpdmF0ZSBfaXNTcGVha2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3RtcFNwZWVjaFRleHQ6IHN0cmluZyA9ICcnO1xuICAgIHByaXZhdGUgZmFjZUFuaW1hdGlvbjogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7IH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgc3R1ZmZcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuaW1hdGlvbiBpcyBsb2FkZWRcbiAgICAgKiBAcGFyYW0gdGhlRWxlbWVudFxuICAgICAqL1xuICAgIG9uQW5pbWF0aW9uTG9hZGVkKHRoZUVsZW1lbnQpIHtcblxuICAgICAgICB0aGlzLmZhY2VBbmltYXRpb24gPSB0aGVFbGVtZW50O1xuICAgICAgICB0aGlzLmZhY2VBbmltYXRpb24uc3RvcCgpXG5cbiAgICB9XG5cbiAgICAvLyBnZXR0ZXJzIC8gc2V0dGVyc1xuICAgIGdldCBpc1NwZWFraW5nKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNTcGVha2luZztcbiAgICB9XG5cbiAgICBzZXQgaXNTcGVha2luZyhzdGF0dXM6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNTcGVha2luZyA9IHN0YXR1cztcbiAgICB9XG5cbiAgICBnZXQgdG1wU3BlZWNoVGV4dCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fdG1wU3BlZWNoVGV4dDtcbiAgICB9XG5cbiAgICBzZXQgdG1wU3BlZWNoVGV4dCh0aGVUZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdG1wU3BlZWNoVGV4dCA9IHRoZVRleHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZXJlJ3Mgc29tZXRoaW5nIHRvIHNheVxuICAgICAqL1xuICAgIGlzVGhlcmVTb21ldGhpbmdUb1NheSgpOiBib29sZWFuIHtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMudG1wU3BlZWNoVGV4dCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy50bXBTcGVlY2hUZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgdG8gbG93ZXJjYXNlIHNvIGl0IGlzIGNvcnJlY3RseSBzcG9rZW4gKEFuZHJvaWQpXG4gICAgICovXG4gICAgcHJpdmF0ZSBmaXhBbmRyb2lkVXBwZXJjYXNlR2xpdGNoKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLnBhZ2UuYW5kcm9pZCkge1xuICAgICAgICAgICAgdGhpcy5zcGVha09wdGlvbnMudGV4dCA9IHRoaXMudG1wU3BlZWNoVGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgU3BlYWsgQnV0dG9uIGlzIGRpc2FibGVkXG4gICAgICovXG4gICAgcHJpdmF0ZSBpc1NwZWFrQnV0dG9uRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU3BlYWtpbmcgfHwgIXRoaXMuaXNUaGVyZVNvbWV0aGluZ1RvU2F5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIFNwZWFrIEJ1dHRvbiBpcyBlbmFibGVkXG4gICAgICovXG4gICAgcHJpdmF0ZSBpc1NwZWFrQnV0dG9uRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNUaGVyZVNvbWV0aGluZ1RvU2F5KCkgJiYgIXRoaXMuaXNTcGVha2luZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgaG93IG11Y2ggdGltZSB0byBzcGVha1xuICAgICAqL1xuICAgIGdldFNwZWFraW5nTGVuZ3RoKCk6IG51bWJlciB7XG4gICAgICAgIC8vIHRoaXMgdGFrZXMgdGhlIGNoYXJhY3RlcnMgYW1vdW50LCBtdWx0aXBsaWVzIGl0IGJ5IGEgc2V0IG51c21iZXIgKDAuMSlcbiAgICAgICAgLy8gYW5kIHRoZW4gYnkgMTAwMCB0byBnZXQgaG93IG1hbnkgbWlsbGlzZWNvbmRzIHRoZSBhcHAgaXMgXCJ0YWxraW5nXCJcbiAgICAgICAgLy8gdGhpcyBzZWVtcyB0byB3b3JrIGZpbmUgb24gQW5kcm9pZCwgYnV0IGl0IHN1cmVseSB3aWxsIGJyZWFrIGV2ZW50dWFsbHkuLi5cbiAgICAgICAgLy8gSSB3aWxsIGZpeCB0aGlzIHdoZW4gSSB1bmRlcnN0YW5kIGhvdyB0aGUgVFRTIGNhbGxiYWNrIHdvcmtzXG4gICAgICAgIHJldHVybiB0aGlzLnRtcFNwZWVjaFRleHQubGVuZ3RoICogMC4xICogMTAwMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTcGVha1xuICAgICAqL1xuICAgIGVtbWFTcGVhaygpOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5pc1NwZWFraW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1NwZWFrQnV0dG9uRW5hYmxlZCgpKSB7XG5cbiAgICAgICAgICAgIC8vIEkgY2FuJ3QgZ2V0IHRoaXMgdG8gd29yay4uLlxuICAgICAgICAgICAgLy8gU2VlbXMgdG8gd29yayBmaW5lIGFjY29yZGluZyB0byBjb25zb2xlLmxvZyh0aGlzLmlzU3BlYWtpbmcpXG4gICAgICAgICAgICAvLyBCdXQgaW5wdXRzIHdvbid0IGdldCBjbGVhcmVkXG4gICAgICAgICAgICAvLyB0aGlzLnNwZWFrT3B0aW9ucy5maW5pc2hlZENhbGxiYWNrID0gKCk9PiB7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5pc1NwZWFraW5nKSAvLyBzaG93cyB0cnVlIChPSylcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmlzU3BlYWtpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLmlzU3BlYWtpbmcpIC8vIHNob3dzIGZhbHNlIChPSylcbiAgICAgICAgICAgIC8vIH07XG5cbiAgICAgICAgICAgIC8vIEkgY2FuJ3QgbWFrZSB0aGUgYWJvdmUgc3BlYWtPcHRpb25zIGNhbGxiYWNrIHdvcmssXG4gICAgICAgICAgICAvLyBzbyBJIHdpbGwgXCJmaXhcIiB0aGlzIHdpdGggYSB0aW1lb3V0Li4uXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMuaXNTcGVha2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFjZUFuaW1hdGlvbi5zdG9wKCk7XG5cbiAgICAgICAgICAgIH0sIHRoaXMuZ2V0U3BlYWtpbmdMZW5ndGgoKSk7XG5cbiAgICAgICAgICAgIHRoaXMuZml4QW5kcm9pZFVwcGVyY2FzZUdsaXRjaCgpO1xuICAgICAgICAgICAgdGhpcy5pc1NwZWFraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZmFjZUFuaW1hdGlvbi5zdGFydCgpO1xuICAgICAgICAgICAgdGhpcy5UVFMuc3BlYWsodGhpcy5zcGVha09wdGlvbnMpO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxufSJdfQ==