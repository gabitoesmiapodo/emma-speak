import { Component } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

@Component({
    selector: "ns-app",
    templateUrl: "./shared/app-component/app.component.html",
})
export class AppComponent {
    constructor() {

        registerElement("Gif", () => require("nativescript-gif").Gif);

    }
}
