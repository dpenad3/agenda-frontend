import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Generic } from '../models/generic';

export abstract class CommonService<E extends Generic> {

    protected urlEndPoint:string;

    protected httpHeaders = new HttpHeaders({
        'Content-Type':'application/json'
    });
    constructor(protected http: HttpClient) { }

    list():Observable<E[]>{
        return this.http.get<E[]>(this.urlEndPoint,{headers: this.httpHeaders});
    }

    detail(id:number):Observable<E>{
        return this.http.get<E>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders});
    }

    create(entity:E):Observable<E>{
        return this.http.post<E>(this.urlEndPoint,entity,{headers: this.httpHeaders});  
    }

    update(entity:E):Observable<E>{
        return this.http.put<E>(`${this.urlEndPoint}/${entity.id}`,entity,{headers:this.httpHeaders});
    }

    delete(id:number):Observable<void>{
        return this.http.delete<void>(`${this.urlEndPoint}/${id}`, {headers:this.httpHeaders});
    }

}
