import {Component} from "@angular/core"
import {FormService} from "../form/form.service"
import {Form} from "../form/form";
import {request} from "http";

@Component({
    'selector': 'url-form',
    'templateUrl': 'url-form.component.html'
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
}
