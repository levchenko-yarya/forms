import {Component} from "@angular/core"
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Component({
    'selector': 'form-app',
    'templateUrl': 'form.component.html'
})

export class FormComponent {
    name = 'Angular'
    url = 'https://docs.google.com/forms/d/e/1FAIpQLSdXaqpqjTgv2xElS1f6HzSJAP693UKIhdRLR1HRZi_s8kPMvg/formResponse'

    fieldMapping = {
        firstname: 'entry.1284856457',
        lastname: 'entry.1731994065',
        age: 'entry.1299770876',
        university: 'entry.1839433063'
    }

    formData = this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        age: ['', Validators.required],
        university: ['', Validators.required]
    })

    save() {
        if (this.formData.valid) {
            const rawValue = this.formData.getRawValue()
            console.log(rawValue)
            let body = new HttpParams()
            // Object.entries(rawValue).forEach(([key, value]) => {
            //     body = body.append(this.fieldMapping[key], value)
            // })
            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
            }
            this.http.post(this.url, body, httpOptions).subscribe(() => {
            }, (err) => {
            })
        } else {
            console.log('form is invalid')
        }
    }

    constructor(private fb: FormBuilder, private http: HttpClient) {
    }
}