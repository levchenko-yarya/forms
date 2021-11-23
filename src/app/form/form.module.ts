import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import {FormComponent} from './form.component'
import {FormioModule} from "@formio/angular"

@NgModule({
    imports: [BrowserModule, FormsModule, FormioModule],
    declarations: [FormComponent],
    exports: [FormComponent],
    bootstrap: [FormComponent]
})

export class FormModule {
}
