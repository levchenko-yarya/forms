import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from "@angular/forms"
import {FormioModule} from "angular-formio"
import {AppComponent} from './app.component'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        FormioModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}
