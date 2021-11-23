import {Component, OnInit} from "@angular/core"
import {Observable} from "rxjs"
import {Builder} from "./builder/builder"
import {BuilderService} from "./builder/builder.service"

@Component({
    selector: 'home-app',
    template: `<h1>Главная</h1>
    <div *ngFor="let builder of builders | async">
        <p>{{builder.components}}</p>
    </div>
    `
})
export class HomeComponent implements OnInit {
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
