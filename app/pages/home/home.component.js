"use strict";
var core_1 = require("@angular/core");
var nativescript_texttospeech_1 = require("nativescript-texttospeech");
var HomeComponent = (function () {
    function HomeComponent() {
        this.TTS = new nativescript_texttospeech_1.TNSTextToSpeech();
        this.messageSpeak = "Hola Emma. ¿Cómo estás?";
        this.theText = "";
        this.speakOptions = {
            text: this.messageSpeak,
            speakRate: 1,
            pitch: 1.5,
            volume: 1.0,
            language: "es-ES"
        };
    }
    /**
     * Speak
     */
    HomeComponent.prototype.emmaSpeak = function () {
        // Call the `speak` method passing the SpeakOptions object
        this.TTS.speak(this.speakOptions);
        this.theText = this.messageSpeak;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "ns-home",
        templateUrl: "./pages/home/home.component.html",
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBRTFDLHVFQUEwRTtBQU8xRSxJQUFhLGFBQWE7SUFPdEI7UUFIQSxRQUFHLEdBQUcsSUFBSSwyQ0FBZSxFQUFFLENBQUM7UUFLeEIsSUFBSSxDQUFDLFlBQVksR0FBRyx5QkFBeUIsQ0FBQTtRQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVsQixJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUN2QixTQUFTLEVBQUUsQ0FBQztZQUNaLEtBQUssRUFBRSxHQUFHO1lBQ1YsTUFBTSxFQUFFLEdBQUc7WUFDWCxRQUFRLEVBQUUsT0FBTztTQUNwQixDQUFBO0lBRUwsQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUNBQVMsR0FBVDtRQUNJLDBEQUEwRDtRQUMxRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFFTCxvQkFBQztBQUFELENBQUMsQUEvQkQsSUErQkM7QUEvQlksYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLGtDQUFrQztLQUNsRCxDQUFDOztHQUVXLGFBQWEsQ0ErQnpCO0FBL0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgVE5TVGV4dFRvU3BlZWNoLCBTcGVha09wdGlvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtdGV4dHRvc3BlZWNoJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaG9tZVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXCIsXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG5cbiAgICBtZXNzYWdlU3BlYWs6IHN0cmluZztcbiAgICB0aGVUZXh0OiBzdHJpbmc7XG4gICAgVFRTID0gbmV3IFROU1RleHRUb1NwZWVjaCgpO1xuICAgIHNwZWFrT3B0aW9uczogU3BlYWtPcHRpb25zO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgdGhpcy5tZXNzYWdlU3BlYWsgPSBcIkhvbGEgRW1tYS4gwr9Dw7NtbyBlc3TDoXM/XCJcbiAgICAgICAgdGhpcy50aGVUZXh0ID0gXCJcIjtcblxuICAgICAgICB0aGlzLnNwZWFrT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRleHQ6IHRoaXMubWVzc2FnZVNwZWFrLFxuICAgICAgICAgICAgc3BlYWtSYXRlOiAxLFxuICAgICAgICAgICAgcGl0Y2g6IDEuNSxcbiAgICAgICAgICAgIHZvbHVtZTogMS4wLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IFwiZXMtRVNcIlxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTcGVha1xuICAgICAqL1xuICAgIGVtbWFTcGVhaygpIHtcbiAgICAgICAgLy8gQ2FsbCB0aGUgYHNwZWFrYCBtZXRob2QgcGFzc2luZyB0aGUgU3BlYWtPcHRpb25zIG9iamVjdFxuICAgICAgICB0aGlzLlRUUy5zcGVhayh0aGlzLnNwZWFrT3B0aW9ucyk7XG4gICAgICAgIHRoaXMudGhlVGV4dCA9IHRoaXMubWVzc2FnZVNwZWFrO1xuICAgIH1cblxufVxuIl19