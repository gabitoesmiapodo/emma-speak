"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("../../pages/home/home.component");
var free_writing_component_1 = require("../../pages/free-writing/free-writing.component");
var routes = [
    { path: "free-writing", component: free_writing_component_1.FreeWritingComponent },
    { path: "", component: home_component_1.HomeComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
