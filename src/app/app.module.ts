import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {Routes, RouterModule} from "@angular/router"

import {AppComponent} from './app.component'
import {HomeComponent} from './form/home.component'
import {FormComponent} from "./form/form.component"
import {BuilderComponent} from "./form/builder/builder.component"
import {UrlFormComponent} from "./form/url/url-form.component"
import {FormikComponent} from "./form/formik.component"
import {FormsModule} from "@angular/forms"
import {FormioModule} from "@formio/angular"

import {FormService} from "./form/form.service"
import {HttpClientModule} from "@angular/common/http"

const appRoutes: Routes = [
    {path: '', component: FormComponent},
    {path: 'url-form', component: UrlFormComponent},
    {path: 'builder-form', component: BuilderComponent},
    {path: 'save-form', component: HomeComponent},
    {path: 'form/:id', component: FormikComponent}
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
        FormikComponent,
        BuilderComponent,
        UrlFormComponent
    ],
    providers: [FormService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
