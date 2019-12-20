import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const URI = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class GeneriqueService {

  constructor(private http: HttpClient) { }

  getList(local: string) {
    return this.http.get(URI + '' + local);
  }
}
