import {Component, OnInit} from "@angular/core"
import {BuilderService} from "../../builder/builder.service"
import {Observable} from "rxjs";
import {Builder} from "../../builder/builder";

@Component({
    'selector': 'form-app',
    'providers': [BuilderService],
    'templateUrl': 'list.component.html'
})

export class ListComponent implements OnInit {

    builders: Observable<Builder[]>

    constructor(private builderService: BuilderService) {
    }

    ngOnInit() {
        this.reloadData()
    }

    reloadData() {
        this.builders = this.builderService.getBuilders()
    }
}
