import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"

@Injectable({
    providedIn: 'root'
})

export class FormService {

    private url = 'http://localhost:3000/post-form';

    constructor(private http: HttpClient) {
    }

    createForm(form: Object): Observable<Object> {
        return this.http.post(`${this.url}`, form)
    }

}
