import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {
  count = 4;
  constructor(private http:HttpClient) { }
  getData():Observable<any> {
      const URL="https://jsonplaceholder.typicode.com/posts/1/comments"
      return this.http.get<any>(URL)
  }
}
