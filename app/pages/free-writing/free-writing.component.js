"use strict";
var core_1 = require("@angular/core");
var application = require("application");
var nativescript_texttospeech_1 = require("nativescript-texttospeech");
var FreeWritingComponent = (function () {
    function FreeWritingComponent() {
        this.TTS = new nativescript_texttospeech_1.TNSTextToSpeech();
        var speakRate;
        // Speak rate works diferent on android and ios
        if (application.android) {
            speakRate = 0.8;
        }
        else if (application.ios) {
            speakRate = 0.1;
        }
        this.speakOptions = {
            language: "es",
            pitch: 1.3,
            speakRate: speakRate,
            text: '',
            volume: 1.0
        };
    }
    /**
     * Speak
     */
    FreeWritingComponent.prototype.emmaSpeak = function () {
        this.TTS.speak(this.speakOptions);
    };
    return FreeWritingComponent;
}());
FreeWritingComponent = __decorate([
    core_1.Component({
        selector: "ns-free-writing",
        templateUrl: "./pages/free-writing/free-writing.component.html",
    }),
    __metadata("design:paramtypes", [])
], FreeWritingComponent);
exports.FreeWritingComponent = FreeWritingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJlZS13cml0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZyZWUtd3JpdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQUMxQyx5Q0FBMkM7QUFFM0MsdUVBQTBFO0FBTzFFLElBQWEsb0JBQW9CO0lBSzdCO1FBSEEsUUFBRyxHQUFHLElBQUksMkNBQWUsRUFBRSxDQUFDO1FBS3hCLElBQUksU0FBa0IsQ0FBQztRQUV2QiwrQ0FBK0M7UUFDL0MsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdEIsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNwQixDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQztRQUVELElBQUksQ0FBQyxZQUFZLEdBQUc7WUFDaEIsUUFBUSxFQUFFLElBQUk7WUFDZCxLQUFLLEVBQUUsR0FBRztZQUNWLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLElBQUksRUFBRSxFQUFFO1lBQ1IsTUFBTSxFQUFFLEdBQUc7U0FDZCxDQUFBO0lBRUwsQ0FBQztJQUVEOztPQUVHO0lBQ0gsd0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUwsMkJBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDO0FBbENZLG9CQUFvQjtJQUxoQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixXQUFXLEVBQUUsa0RBQWtEO0tBQ2xFLENBQUM7O0dBRVcsb0JBQW9CLENBa0NoQztBQWxDWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFROU1RleHRUb1NwZWVjaCwgU3BlYWtPcHRpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRleHR0b3NwZWVjaCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWZyZWUtd3JpdGluZ1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvZnJlZS13cml0aW5nL2ZyZWUtd3JpdGluZy5jb21wb25lbnQuaHRtbFwiLFxufSlcblxuZXhwb3J0IGNsYXNzIEZyZWVXcml0aW5nQ29tcG9uZW50IHtcblxuICAgIFRUUyA9IG5ldyBUTlNUZXh0VG9TcGVlY2goKTtcbiAgICBzcGVha09wdGlvbnM6IFNwZWFrT3B0aW9ucztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIGxldCBzcGVha1JhdGUgOiBudW1iZXI7XG5cbiAgICAgICAgLy8gU3BlYWsgcmF0ZSB3b3JrcyBkaWZlcmVudCBvbiBhbmRyb2lkIGFuZCBpb3NcbiAgICAgICAgaWYgKGFwcGxpY2F0aW9uLmFuZHJvaWQpIHtcbiAgICAgICAgICAgIHNwZWFrUmF0ZSA9IDAuODtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhcHBsaWNhdGlvbi5pb3MpIHtcbiAgICAgICAgICAgIHNwZWFrUmF0ZSA9IDAuMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3BlYWtPcHRpb25zID0ge1xuICAgICAgICAgICAgbGFuZ3VhZ2U6IFwiZXNcIixcbiAgICAgICAgICAgIHBpdGNoOiAxLjMsXG4gICAgICAgICAgICBzcGVha1JhdGU6IHNwZWFrUmF0ZSxcbiAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgdm9sdW1lOiAxLjBcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3BlYWtcbiAgICAgKi9cbiAgICBlbW1hU3BlYWsoKSA6IHZvaWQge1xuICAgICAgICB0aGlzLlRUUy5zcGVhayh0aGlzLnNwZWFrT3B0aW9ucyk7XG4gICAgfVxuXG59XG4iXX0=