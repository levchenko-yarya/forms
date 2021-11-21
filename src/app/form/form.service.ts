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

    getForm(id: number): Observable<any> {
        return this.http.get(`${this.url}/form/${id}`)
    }

    createForm(form: Object): Observable<Object> {
        return this.http.post(`${this.url}/form`, form)
    }

    updateForm(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.url}/form/${id}`, value)
    }

    deleteForm(id: number): Observable<Object> {
        return this.http.delete(`${this.url}/form/${id}`)
    }

    getBuilders(): Observable<any> {
        return this.http.get(`${this.url}/builders`)
    }

    createBuilder(builder: Object): Observable<Object> {
        return this.http.post(`${this.url}/builder`, builder)
    }

}
