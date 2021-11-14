import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {Routes, RouterModule} from "@angular/router"

import {AppComponent} from './app.component'
import {HomeComponent} from './form/home.component'
import {FormComponent} from "./form/form.component"
import {BuilderComponent} from "./form/builder/builder.component";
import {UrlFormComponent} from "./form/url/url-form.component";
import {FormsModule} from "@angular/forms"
import {FormioModule} from "angular-formio"

import {FormService} from "./form/form.service"
import {HttpClientModule} from "@angular/common/http"

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'form', component: FormComponent},
    {path: 'url-form', component: UrlFormComponent},
    {path: 'builder-form', component: BuilderComponent}
]

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        FormioModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        FormComponent,
        BuilderComponent,
        UrlFormComponent
    ],
    providers: [FormService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
