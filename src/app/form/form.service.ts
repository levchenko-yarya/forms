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

    /*postData(form) {
        return this.http.post<Form>(this.url, form)
    }*/

    /*createForm(form: string): Observable<Form> {

        return this.http.post<Form>(this.url, form).pipe(
            map((obj)=> obj)
        )
    }*/

    /*constructor(private http: HttpClient) {
    }

    addForm(form) {
        let headers = new HttpHeaders()
        headers.append('Content-Type', 'application/json')

        return this.http.post(
            'http://localhost:3000/form',
            form,
            {headers: headers}
        )  // @ts-ignore  .map(res => res.json())
    }*/

}
