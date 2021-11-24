import {Component, OnInit} from "@angular/core";
import {FormService} from "./form.service";
import {BuilderService} from "./builder/builder.service";
import {Form} from './form'
import {Builder} from "./builder/builder";
import {Observable} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    'selector': 'formik-app',
    'templateUrl': './formik.component.html'
})

export class FormikComponent implements OnInit {

    id: any
    form: Form = new Form()
    builder: Builder

    constructor(private builderService: BuilderService,
                private formService: FormService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.builder = new Builder()
        this.id = this.route.snapshot.params['id']
        this.builderService.getBuilder(this.id)
            .subscribe(data => {
                console.log(data)
                this.builder = data
            }), error => console.log(error)
    }

    reloadData() {
        this.builderService.getBuilder(this.id)
    }

    save() {
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

