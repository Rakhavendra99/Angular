import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {
  count = 4;
  constructor(private http:HttpClient) { }
//Headers are immutable - they cann't be modified
  // -PUT
  // -GET
  // -DELETE
   // -PATCH
  // -POST
   
  getData():Observable<any> {
    // const URL="https://jsonplaceholder.typicode.com/posts/1/comments"
    const URL="http://localhost:3000/contacts"
    let httpHeader=new HttpHeaders({
      'content-type':'Application/json',
      'Authorization':'rakhavtutorial1312@123',
      'timeCount':'5000'
    });
    //custom header
    httpHeader = httpHeader.set('id','3')
    const time = httpHeader.get('timeCount')
    if(time === "5000"){
      httpHeader = httpHeader.set('Authorization','')
    } 
    return this.http.get<any>(URL,{headers:httpHeader})
  }
  getcontactById(){
    const httpParams = new HttpParams({
      fromObject:{
        id:['4','1']
      }
    })
    return this.http.get("http://localhost:3000/contacts",{params:httpParams})
  }

  postData(createBody:any):Observable<any>{
    const URL="http://localhost:3000/contacts"
    return this.http.post<any>(URL,createBody)
  }
  putData(contactId:any,updateBody:any):Observable<any>{
    const URL="http://localhost:3000/contacts/"+contactId
    return this.http.put<any>(URL,updateBody);    
  }
  deleteData(contactId:any){
    const URL="http://localhost:3000/contacts/"+contactId
    return this.http.delete<any>(URL);
  }
}
