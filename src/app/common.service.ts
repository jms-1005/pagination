import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shows } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getShows(pageNumber:number){
    return this.http.get<Shows>("http://localhost:1337/api/shows?pagination[page]=" + pageNumber);
  }
}
