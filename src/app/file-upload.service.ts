import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:3007/'

  postProducts(body: string[]): Observable<any> {
    return this.http.post(this.url + 'products', body)
  }
}