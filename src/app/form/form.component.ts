import {Component, OnInit} from "@angular/core"
import {FormService} from "./form.service"
import {Form} from './form'
import {Observable} from "rxjs";

@Component({
    'selector': 'form-app',
    'providers': [FormService],
    'templateUrl': './form.component.html'
})

export class FormComponent implements OnInit {

    forms:Observable<Form[]>

    constructor(private formService: FormService) {
    }

    ngOnInit() {
        this.reloadData()
    }

    reloadData(){
        this.forms = this.formService.getForms()
    }
}
