import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {Routes, RouterModule} from "@angular/router"

import {AppComponent} from './app.component'
import {ListComponent} from "./form/list/list.component"
import {BuilderComponent} from "./builder/builder.component"
import {UrlFormComponent} from "./url/url-form.component"
import {CreateComponent} from "./form/create/create.component"
import {FormsModule} from "@angular/forms"
import {FormioModule} from "@formio/angular"

import {FormService} from "./form/form.service"
import {HttpClientModule} from "@angular/common/http"

const appRoutes: Routes = [
    {path: '', component: ListComponent},
    {path: 'url-form', component: UrlFormComponent},
    {path: 'builder-form', component: BuilderComponent},
    {path: 'form/:id', component: CreateComponent}
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
        ListComponent,
        CreateComponent,
        BuilderComponent,
        UrlFormComponent
    ],
    providers: [FormService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
