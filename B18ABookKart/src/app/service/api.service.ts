import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProducts(){
    return this.http.get<any>("https://bookcart.azurewebsites.net/api/Book")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
