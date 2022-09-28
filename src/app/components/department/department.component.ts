import { Component, OnInit } from '@angular/core';
import { IDepartment } from 'src/app/models/IDepartment';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments:IDepartment[];
  constructor(private departmentService:DepartmentService) { 
    this.departments = [];
  }

  ngOnInit(): void {
    this.getAllDepartments();
  }

  getAllDepartments(){
    this.departmentService.getAllDepartments().subscribe(response=>{
      this.departments = response;
    });
  }

  onClick(id:number){
    if(window.confirm("Are you sure you want to delete this item ??")){
      this.departmentService.deletDepartment(id).subscribe(response=>{
        this.departments.splice(this.departments.findIndex(p => p.id === id), 1);    
      });
    }
  }
}
