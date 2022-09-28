import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEmployee } from '../models/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url = environment.apiUrl;
  
  constructor(private http:HttpClient) { }

  getAllEmployees(){
    return this.http.get<IEmployee[]>(this._url+`employee`);
  }

  addEmployee(employee:any){
    return this.http.post(this._url+`employee`,employee);
  }

  getEmployeeById(id:string){
    return this.http.get(this._url+`employee/${id}`);
  }

  updateEmployee(employee:any,id:number){
    return this.http.put(this._url + `employee/${id}`, employee);
  }

  deletEmployee(id:number){
    return this.http.delete(this._url+`employee/${id}`)
  }
}
