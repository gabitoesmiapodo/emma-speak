"use strict";
// Base components
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_routing_1 = require("./shared/routing/app.routing");
var app_component_1 = require("./shared/app-component/app.component");
// App components
var home_component_1 = require("./pages/home/home.component");
var free_writing_component_1 = require("./pages/free-writing/free-writing.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            app_routing_1.AppRoutingModule,
            forms_1.NativeScriptFormsModule,
            nativescript_module_1.NativeScriptModule
        ],
        declarations: [
            app_component_1.AppComponent,
            free_writing_component_1.FreeWritingComponent,
            home_component_1.HomeComponent
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
