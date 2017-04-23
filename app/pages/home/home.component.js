"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var HomeComponent = (function () {
    function HomeComponent(page) {
        this.page = page;
        page.actionBarHidden = true;
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "ns-home",
        templateUrl: "./pages/home/home.component.html"
    }),
    __metadata("design:paramtypes", [page_1.Page])
], HomeComponent);
exports.HomeComponent = HomeComponent;
