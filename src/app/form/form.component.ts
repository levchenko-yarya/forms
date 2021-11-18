import {Component, OnInit} from "@angular/core"
import {FormService} from "./form.service"
import {Form} from './form'

@Component({
    'selector': 'form-app',
    'providers': [FormService],
    'templateUrl': './form.component.html'
})

export class FormComponent implements OnInit {

    form: Form = new Form()

    constructor(private formService: FormService) {
    }

    ngOnInit() {
    }

    save() {
        this.formService
            .createForm(this.form)
            .subscribe(data => {
                console.log(data)
                this.form = new Form()
            }),
            error=> console.log(error)
    }

    onSubmit() {
        this.save()
        // сделать redirect
    }
}
