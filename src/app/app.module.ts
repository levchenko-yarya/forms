import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import {AppComponent} from './app.component'
import {FormModule} from "./form/form.module"

@NgModule({
    imports: [BrowserModule, FormsModule, FormModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}