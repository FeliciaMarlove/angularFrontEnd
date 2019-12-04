import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DefisService {
  public selection;
  public idDefi;

  constructor(private http: HttpClient) { }
}
