import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from "@angular/common/http"
//import 'rxjs/add/operator/map'

@Injectable({
    providedIn: 'root'
})
export class FormService {

    constructor(private http: HttpClient) {
    }

    addForm(form) {
        let headers = new HttpHeaders()
        headers.append('Content-Type', 'application/json')

        return this.http.post(
            'http://localhost:3000/form',
            form,
            {headers: headers}
        )  // @ts-ignore  .map(res => res.json())
    }

}
