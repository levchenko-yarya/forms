import {Component, OnInit, ElementRef, ViewChild} from "@angular/core"
import {Builder} from "./builder"
import {BuilderService} from "./builder.service"

@Component({
    'selector': 'builder-form',
    'templateUrl': './builder.component.html'
})

export class BuilderComponent implements OnInit {

    builder: Builder = new Builder()

    constructor(private builderService: BuilderService) {
    }

    ngOnInit() {
    }

    @ViewChild('json') jsonElement?: ElementRef
    public component: Object = {
        components: []
    }
    onChange(event) {
        this.jsonElement.nativeElement.innerHTML = ''
        this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.component, null, 4)))
    }

    save() {
        console.log(this.builder)
        this.builderService
            .createBuilder(this.builder)
            .subscribe(data => {
                console.log(data)
                this.builder = new Builder()
            }),
            error => console.log(error)
    }

    onSubmit() {
        this.save()
        // сделать redirect
    }
}
