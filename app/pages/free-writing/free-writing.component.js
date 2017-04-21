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
        page.actionBarHidden = true;
    }
    /**
     * Speak
     */
    FreeWritingComponent.prototype.emmaSpeak = function () {
        // Convert to lowercase so it is correctly spoken (Android)
        this.speakOptions.text = this.tmpSpeechText.toLowerCase();
        this.TTS.speak(this.speakOptions);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJlZS13cml0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZyZWUtd3JpdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQUMxQyxnQ0FBK0I7QUFDL0IsdUVBQTBFO0FBQzFFLG1FQUFnRTtBQU9oRSxJQUFhLG9CQUFvQjtJQU83Qiw4QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFMOUIsUUFBRyxHQUFHLElBQUksMkNBQWUsRUFBRSxDQUFDO1FBQzVCLGdCQUFXLEdBQUcsSUFBSSwyQkFBVyxDQUFDO1FBQzlCLGlCQUFZLEdBQWlCLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUM7UUFJOUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsd0NBQVMsR0FBVDtRQUNJLDJEQUEyRDtRQUMzRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUwsMkJBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLG9CQUFvQjtJQUxoQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixXQUFXLEVBQUUsa0RBQWtEO0tBQ2xFLENBQUM7cUNBUzRCLFdBQUk7R0FQckIsb0JBQW9CLENBb0JoQztBQXBCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBUTlNUZXh0VG9TcGVlY2gsIFNwZWFrT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZXh0dG9zcGVlY2gnO1xuaW1wb3J0IHsgU3BlYWtDb25maWcgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29uZmlnL3NwZWVjaC1jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1mcmVlLXdyaXRpbmdcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2ZyZWUtd3JpdGluZy9mcmVlLXdyaXRpbmcuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5cbmV4cG9ydCBjbGFzcyBGcmVlV3JpdGluZ0NvbXBvbmVudCB7XG5cbiAgICBUVFMgPSBuZXcgVE5TVGV4dFRvU3BlZWNoKCk7XG4gICAgc3BlYWtDb25maWcgPSBuZXcgU3BlYWtDb25maWc7XG4gICAgc3BlYWtPcHRpb25zOiBTcGVha09wdGlvbnMgPSB0aGlzLnNwZWFrQ29uZmlnLnNwZWFrT3B0aW9uc0RlZmF1bHQ7XG4gICAgdG1wU3BlZWNoVGV4dCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge1xuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3BlYWtcbiAgICAgKi9cbiAgICBlbW1hU3BlYWsoKSA6IHZvaWQge1xuICAgICAgICAvLyBDb252ZXJ0IHRvIGxvd2VyY2FzZSBzbyBpdCBpcyBjb3JyZWN0bHkgc3Bva2VuIChBbmRyb2lkKVxuICAgICAgICB0aGlzLnNwZWFrT3B0aW9ucy50ZXh0ID0gdGhpcy50bXBTcGVlY2hUZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMuVFRTLnNwZWFrKHRoaXMuc3BlYWtPcHRpb25zKTtcbiAgICB9XG5cbn1cbiJdfQ==