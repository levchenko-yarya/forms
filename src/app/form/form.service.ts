import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"

@Injectable({
    providedIn: 'root'
})

export class FormService {

    private url = 'http://localhost:3000/form';

    constructor(private http: HttpClient) {
    }

    getForms(): Observable<any> {
        return this.http.get(`${this.url}/all`)
    }

    getForm(id: number): Observable<any> {
        return this.http.get(`${this.url}/${id}`)
    }

    createForm(form: Object): Observable<Object> {
        return this.http.post(`${this.url}`, form)
    }

    updateForm(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.url}/${id}`, value)
    }

    deleteForm(id: number): Observable<Object> {
        return this.http.delete(`${this.url}/${id}`)
    }
}
