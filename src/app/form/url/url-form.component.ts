import {Component} from "@angular/core"
import {FormService} from "../form.service"
import {Form} from "../form";
import {request} from "http";

@Component({
    'selector': 'url-form',
    'template': `
        <div>
            <p>url: https://exkqicypuqmpgct.form.io/formangular</p>
            <formio src='https://exkqicypuqmpgct.form.io/formangular'></formio>
           <!-- <formio (ngSubmit)="anSubmit()" [(ngModel)]="form.data" [form]='{
                "submit": "anSubmit()",
                "ngModel": "form.data",
                "title": "Test form",
                "components": [
                    {
                    "type": "textfield",
                    "input": true,
                    "tableView": true,
                    "inputType": "text",
                    "inputMask": "",
                    "label": "First Name",
                    "key": "firstName",
                    "placeholder": "Enter your first name",
                    "prefix": "",
                    "suffix": "",
                    "multiple": false,
                    "defaultValue": "",
                    "protected": false,
                    "unique": false,
                    "persistent": true,
                    "validate": {
                        "required": true,
                        "minLength": 2,
                        "maxLength": 10,
                        "pattern": "",
                        "custom": "",
                        "customPrivate": false
                    },
                    "conditional": {
                        "show": "",
                        "when": null,
                        "eq": ""
                    }
                },
                {
                    "type": "textfield",
                    "input": true,
                    "tableView": true,
                    "inputType": "text",
                    "inputMask": "",
                    "label": "Last Name",
                    "key": "lastName",
                    "placeholder": "Enter your last name",
                    "prefix": "",
                    "suffix": "",
                    "multiple": false,
                    "defaultValue": "",
                    "protected": false,
                    "unique": false,
                    "persistent": true,
                    "validate": {
                        "required": true,
                        "minLength": 2,
                        "maxLength": 10,
                        "pattern": "",
                        "custom": "",
                        "customPrivate": false
                    },
                    "conditional": {
                        "show": "",
                        "when": null,
                        "eq": ""
                    }
                },
                {
                    "input": true,
                    "label": "Submit",
                    "tableView": false,
                    "key": "submit",
                    "size": "md",
                    "leftIcon": "",
                    "rightIcon": "",
                    "block": false,
                    "action": "submit",
                    "disableOnInvalid": true,
                    "theme": "primary",
                    "type": "button"
                }]
            }'></formio>-->
        </div>
    `
})
export class UrlFormComponent {

    form: Form = new Form()

    constructor(private formService: FormService) {
    }

    save() {
        console.log(this.form)
        this.formService
            .createForm(this.form)
            .subscribe(data => {
                console.log(data)
                this.form = new Form()
            }),
            error => console.log(error)
    }

    anSubmit() {
        this.save()
    }

    formAddClick() {
        const form = {
            firstname: document.getElementsByName('name[firstName]'),
            lastname: document.getElementsByName('egfcv28-lastName')
        }
        console.log(form)
    }
}
