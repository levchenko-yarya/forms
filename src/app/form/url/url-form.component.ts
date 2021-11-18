import {Component} from "@angular/core"
import {FormService} from "../form.service"

@Component({
    'selector': 'url-form',
    'template': `
        <div>
            <p>url: https://exkqicypuqmpgct.form.io/formangular</p>
            <formio src='https://exkqicypuqmpgct.form.io/formangular'></formio>
        </div>
    `
})
export class UrlFormComponent {
    name: String
    components: String

    constructor(private formService: FormService) {}

    formAddClick() {
        const form = {
            name: this.name,
            components: this.components
        }
        //this.formService.addForm(form)
    }
}
