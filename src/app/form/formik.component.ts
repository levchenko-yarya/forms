import {Component, OnInit} from "@angular/core";
import {FormService} from "./form.service";
import {BuilderService} from "./builder/builder.service";
import {Form} from './form'
import {Builder} from "./builder/builder";
import {Observable} from "rxjs";

@Component({
    'selector': 'formik-app',
    'templateUrl': './formik.component.html'
})

export class FormikComponent implements OnInit {

    form: Form = new Form()
    builders: Observable<Builder[]>
    private elements: any;

    constructor(private builderService: BuilderService,
                private formService: FormService) {
    }

    ngOnInit() {
        this.reloadData()
    }

    reloadData() {
        this.builders = this.builderService.getBuilders()
    }

    save() {
        //let input = document.querySelector('input')
        //console.log(input.value)
        // console.log(this.form)
        // console.log(this.form.data)
        this.formService
            .createForm(this.form)
            .subscribe(data => {
                console.log(data)
                this.form = new Form()
            }),
            error => console.log(error)
    }

    onSubmit() {
        let input = document.querySelectorAll('input')
        // @ts-ignore
        for(let el of input) {
            console.log(el.value)
        }
        

        this.save()
        // сделать redirect
    }
}

