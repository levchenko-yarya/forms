import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"

@Injectable({
    providedIn: 'root'
})

export class FormService {

    private url = 'http://localhost:3000';

    constructor(private http: HttpClient) {
    }

    getForms(): Observable<any> {
        return this.http.get(`${this.url}/forms`)
    }

    createForm(form: Object): Observable<Object> {
        return this.http.post(`${this.url}/form`, form)
    }

}
