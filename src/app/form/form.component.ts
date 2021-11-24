import {Component, OnInit} from "@angular/core"
import {BuilderService} from "./builder/builder.service"
import {Observable} from "rxjs";
import {Builder} from "./builder/builder";
import {Router} from "@angular/router";
import {ObjectID} from 'mongodb'

@Component({
    'selector': 'form-app',
    'providers': [BuilderService],
    'templateUrl': './form.component.html'
})

export class FormComponent implements OnInit {

    builders: Observable<Builder[]>

    constructor(private builderService: BuilderService, private router: Router) {
    }

    builderDetails(id: string) {
        this.router.navigate(['form', id])
    }

    ngOnInit() {
        this.reloadData()
    }

    reloadData() {
        this.builders = this.builderService.getBuilders()
    }
}
