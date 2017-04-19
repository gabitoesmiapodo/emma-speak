import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HomeComponent } from "../../pages/home/home.component";
import { FreeWritingComponent } from "../../pages/free-writing/free-writing.component";

const routes: Routes = [
    { path: "free-writing", component: FreeWritingComponent },
    { path: "", component: HomeComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }