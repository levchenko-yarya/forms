import {Component, ElementRef, ViewChild} from "@angular/core"

@Component({
    'selector': 'builder-form',
    'template': `
        <div>
            <form-builder [form]="form" (change)="onChange($event)"></form-builder>
            <button>Сохранить форму</button>
            <div class="well jsonviewer">
                <pre id="json"><code class="language-json" #json></code></pre>
            </div>
        </div>
    `
})

export class BuilderComponent {
    @ViewChild('json') jsonElement?: ElementRef
    public form: Object = {
        components: []
    }

    onChange(event) {
        this.jsonElement.nativeElement.innerHTML = ''
        this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)))
    }

}
