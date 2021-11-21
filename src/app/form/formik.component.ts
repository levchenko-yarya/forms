import {Component, OnInit} from "@angular/core";
import {FormService} from "./form.service";
import {Form} from './form'

@Component({
    'selector': 'formik-app',
    'templateUrl': './formik.component.html'
})

export class FormikComponent implements OnInit {

    form: Form = new Form()

    constructor(private formService: FormService) {
    }

    ngOnInit() {
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

    onSubmit() {
        this.save()
        // сделать redirect
    }
}
