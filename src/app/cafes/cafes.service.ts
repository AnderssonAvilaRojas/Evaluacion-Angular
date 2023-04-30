import { Cafe } from './cafe';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class CafesService {

private apiUrl: string = environment.baseUrl;
constructor(private http: HttpClient) { }
getCafes(): Observable<Cafe[]> {
  return this.http.get<Cafe[]>(this.apiUrl);
}
//constructor() { }

}
