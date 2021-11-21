import {Component, OnInit, ElementRef, ViewChild} from "@angular/core"
import {Form} from "../form"
import {FormService} from "../form.service"

@Component({
    'selector': 'builder-form',
    'templateUrl': './builder.component.html'
})

export class BuilderComponent implements OnInit {

    form: Form = new Form()

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
