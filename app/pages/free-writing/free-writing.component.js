"use strict";
var core_1 = require("@angular/core");
var nativescript_texttospeech_1 = require("nativescript-texttospeech");
var FreeWritingComponent = (function () {
    function FreeWritingComponent() {
        this.TTS = new nativescript_texttospeech_1.TNSTextToSpeech();
        this.messageSpeak = "Hola Emma... ¿Cómo estás?";
        this.theText = "";
        this.speakOptions = {
            text: this.messageSpeak,
            speakRate: 0.3,
            pitch: 1.5,
            volume: 1.0,
            language: "es-ES"
        };
    }
    /**
     * Speak
     */
    FreeWritingComponent.prototype.emmaSpeak = function () {
        // Call the `speak` method passing the SpeakOptions object
        this.TTS.speak(this.speakOptions);
        this.theText = this.messageSpeak;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJlZS13cml0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZyZWUtd3JpdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQUUxQyx1RUFBMEU7QUFPMUUsSUFBYSxvQkFBb0I7SUFPN0I7UUFIQSxRQUFHLEdBQUcsSUFBSSwyQ0FBZSxFQUFFLENBQUM7UUFLeEIsSUFBSSxDQUFDLFlBQVksR0FBRywyQkFBMkIsQ0FBQTtRQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVsQixJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUN2QixTQUFTLEVBQUUsR0FBRztZQUNkLEtBQUssRUFBRSxHQUFHO1lBQ1YsTUFBTSxFQUFFLEdBQUc7WUFDWCxRQUFRLEVBQUUsT0FBTztTQUNwQixDQUFBO0lBRUwsQ0FBQztJQUVEOztPQUVHO0lBQ0gsd0NBQVMsR0FBVDtRQUNJLDBEQUEwRDtRQUMxRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFFTCwyQkFBQztBQUFELENBQUMsQUEvQkQsSUErQkM7QUEvQlksb0JBQW9CO0lBTGhDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFdBQVcsRUFBRSxrREFBa0Q7S0FDbEUsQ0FBQzs7R0FFVyxvQkFBb0IsQ0ErQmhDO0FBL0JZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFROU1RleHRUb1NwZWVjaCwgU3BlYWtPcHRpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRleHR0b3NwZWVjaCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWZyZWUtd3JpdGluZ1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvZnJlZS13cml0aW5nL2ZyZWUtd3JpdGluZy5jb21wb25lbnQuaHRtbFwiLFxufSlcblxuZXhwb3J0IGNsYXNzIEZyZWVXcml0aW5nQ29tcG9uZW50IHtcblxuICAgIG1lc3NhZ2VTcGVhazogc3RyaW5nO1xuICAgIHRoZVRleHQ6IHN0cmluZztcbiAgICBUVFMgPSBuZXcgVE5TVGV4dFRvU3BlZWNoKCk7XG4gICAgc3BlYWtPcHRpb25zOiBTcGVha09wdGlvbnM7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICB0aGlzLm1lc3NhZ2VTcGVhayA9IFwiSG9sYSBFbW1hLi4uIMK/Q8OzbW8gZXN0w6FzP1wiXG4gICAgICAgIHRoaXMudGhlVGV4dCA9IFwiXCI7XG5cbiAgICAgICAgdGhpcy5zcGVha09wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZXh0OiB0aGlzLm1lc3NhZ2VTcGVhayxcbiAgICAgICAgICAgIHNwZWFrUmF0ZTogMC4zLFxuICAgICAgICAgICAgcGl0Y2g6IDEuNSxcbiAgICAgICAgICAgIHZvbHVtZTogMS4wLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IFwiZXMtRVNcIlxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTcGVha1xuICAgICAqL1xuICAgIGVtbWFTcGVhaygpIHtcbiAgICAgICAgLy8gQ2FsbCB0aGUgYHNwZWFrYCBtZXRob2QgcGFzc2luZyB0aGUgU3BlYWtPcHRpb25zIG9iamVjdFxuICAgICAgICB0aGlzLlRUUy5zcGVhayh0aGlzLnNwZWFrT3B0aW9ucyk7XG4gICAgICAgIHRoaXMudGhlVGV4dCA9IHRoaXMubWVzc2FnZVNwZWFrO1xuICAgIH1cblxufVxuIl19