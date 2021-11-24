import {Injectable} from "@angular/core"
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"

@Injectable({
    providedIn: 'root'
})

export class BuilderService {

    private url = 'http://localhost:3000/builder';

    constructor(private http: HttpClient) {
    }

    getBuilders(): Observable<any> {
        return this.http.get(`${this.url}/all`)
    }

    getBuilder(id: any): Observable<any> {
        return this.http.get(`${this.url}/${id}`)
    }

    createBuilder(builder: Object): Observable<Object> {
        return this.http.post(`${this.url}/`, builder)
    }

    updateBuilder(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.url}/${id}`, value)
    }

    deleteBuilder(id: number): Observable<Object> {
        return this.http.delete(`${this.url}/${id}`)
    }
}
