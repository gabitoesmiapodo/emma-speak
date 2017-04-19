import { Component } from "@angular/core";
import { Page } from "ui/page";

@Component({
    selector: "ns-home",
    templateUrl: "./pages/home/home.component.html"
})

export class HomeComponent {

    constructor(private page: Page) {
        // page.actionBarHidden = true;
    }

}
