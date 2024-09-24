import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private httpClient = inject(HttpClient);
  private apiUrl = environment.baseUrl;

  constructor() { }

  getNews(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/News`);
  }


  getProducts(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/products`);
  }

  sendMessage(data:any):Observable<any>{
    return this.httpClient.post<any>(`${this.apiUrl}/Contacts`,data);
  }
}
