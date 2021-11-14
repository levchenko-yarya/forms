import {Component} from "@angular/core"
import {FormService} from "../form.service"

@Component({
    'selector': 'url-form',
    'template': `
        <div>
            <!--<formio src='https://exkqicypuqmpgct.form.io/formangular'></formio>
            <formio [form]='{
            components: [
                {
            "label": "name",
            "tableView": true,
            "key": "name",
            "type": "textfield",
            "input": true
            },
            {
            "type": "button",
            "label": "Submit",
            "key": "submit",
            "disableOnInvalid": true,
            "input": true,
            "tableView": false
            }
            ]
            }'></formio>-->

            <form (submit)="formAddClick()">
                <input type="text" [(ngModel)]="name" placeholder="введите название формы" class="form-control">
                <input type="text" [(ngModel)]="components" placeholder="введите компоненты" class="form-control">
                <input type="submit">
            </form>
        </div>
    `
})
export class UrlFormComponent {
    url = 'https://exkqicypuqmpgct.form.io/formangular'
    name: String
    components: String

    constructor(
        private formService: FormService
    ) {
    }

    formAddClick() {
        const form = {
            name: this.name,
            components: this.components
        }

        this.formService.addForm(form)
    }


}
