import {Component, OnInit} from '@angular/core'
import {BuilderService} from "./form/builder/builder.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Builder} from "./form/builder/builder";

@Component({
    'selector': 'app-root',
    'templateUrl': 'app.component.html'
})

export class AppComponent implements OnInit {

    builders: Observable<Builder[]>
    constructor(private builderService: BuilderService, private router: Router) {
    }

    ngOnInit() {
    }

    builderDetails(id: number) {
        this.router.navigate(['details', id])
    }
}
