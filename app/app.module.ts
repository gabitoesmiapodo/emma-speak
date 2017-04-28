// Base components
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppRoutingModule } from "./shared/routing/app.routing";

import { AppComponent } from "./shared/app-component/app.component";

// App components
import { HomeComponent } from "./pages/home/home.component";
import { FreeWritingComponent } from "./pages/free-writing/free-writing.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptModule
    ],
    declarations: [
        AppComponent,
        FreeWritingComponent,
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
