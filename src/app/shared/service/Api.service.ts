import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  constructor(private http: HttpClient) { 
  }

  getData<T>(url:string): Observable<T>{
    return this.http.get<T>(url,{});
  }

  postData<T>(data: T,url:string): Observable<T>{
    return this.http.post<T>(environment.apod, data);
  }

  updateData<T>(id:number, data: T, url:string): Observable<T>{
    return this.http.put<T>(environment.apod+'/'+id, data);
  }

  deleteData<T>(id:number, url:string): Observable<T>{
    return this.http.delete<T>(environment.apod+'/'+id);
  }
}
