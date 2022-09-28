import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/IEmployee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:IEmployee[];
  constructor(private employeeSerive:EmployeeService) {
    this.employees = [];
   }

  ngOnInit(): void {
    this.getAllEmployess();
  }

  getAllEmployess(){
    this.employeeSerive.getAllEmployees().subscribe(response=>{
      this.employees = response;
      console.log(response);
    })
  }

  onClick(id:number){
    if(window.confirm("Are you sure you want to delete this item ??")){
      this.employeeSerive.deletEmployee(id).subscribe(response=>{
        this.employees.splice(this.employees.findIndex(p => p.id === id), 1);    
      });
    }
  }

}
