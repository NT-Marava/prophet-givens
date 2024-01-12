import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private _baseurl: string = "http://localhost:8000/";
  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient) { }


  get(url: string): Observable<any> {
    return this.http.get(this._baseurl + url);
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(this._baseurl + url, data);
  }
}
