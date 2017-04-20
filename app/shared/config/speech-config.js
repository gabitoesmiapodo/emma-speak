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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlZWNoLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWVjaC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHlDQUEyQztBQUUzQztJQWNJO1FBWlEsdUJBQWtCLEdBQWtCO1lBQ3BDLFFBQVEsRUFBRSxJQUFJO1lBQ2QsS0FBSyxFQUFFLEdBQUc7WUFDVixTQUFTLEVBQUUsV0FBVyxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsR0FBRztZQUMxQyxJQUFJLEVBQUUsRUFBRTtZQUNSLE1BQU0sRUFBRSxHQUFHO1NBQ2QsQ0FBQztRQU9GLEVBQUU7SUFDTixDQUFDO0lBTkQsc0JBQUksNENBQW1CO2FBQXZCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQU1MLGtCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwZWFrT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZXh0dG9zcGVlY2gnO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBTcGVha0NvbmZpZyB7XG5cbiAgICBwcml2YXRlIHNwZWFrT3B0aW9uc0NvbmZpZyA6IFNwZWFrT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGxhbmd1YWdlOiBcImVzXCIsXG4gICAgICAgICAgICBwaXRjaDogMS4zLFxuICAgICAgICAgICAgc3BlYWtSYXRlOiBhcHBsaWNhdGlvbi5hbmRyb2lkID8gMC44IDogMC4xLFxuICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICB2b2x1bWU6IDEuMFxuICAgICAgICB9O1xuXG4gICAgZ2V0IHNwZWFrT3B0aW9uc0RlZmF1bHQoKSA6IFNwZWFrT3B0aW9ucyB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwZWFrT3B0aW9uc0NvbmZpZztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbn0iXX0=