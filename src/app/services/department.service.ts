import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDepartment } from '../models/IDepartment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private _url = environment.apiUrl;
  
  constructor(private http:HttpClient) { }

  getAllDepartments(){
    return this.http.get<IDepartment[]>(this._url+`department`);
  }

  addDepartment(department:any){
    return this.http.post(this._url+`department`,department);
  }

  getDepetmentById(id:string){
    return this.http.get(this._url+`Department/${id}`);
  }

  updateDepartment(department:any,id:number){
    return this.http.put(this._url + `Department/${id}`, department);
  }

  deletDepartment(id:number){
    return this.http.delete(this._url+`Department/${id}`)
  }
}
