import {Component, OnInit, ElementRef, ViewChild} from "@angular/core"
import {Builder} from "./builder"
import {FormService} from "../form.service"

@Component({
    'selector': 'builder-form',
    'templateUrl': './builder.component.html'
})

export class BuilderComponent implements OnInit {

    builder: Builder = new Builder()

    constructor(private formService: FormService) {
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
        this.formService
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
