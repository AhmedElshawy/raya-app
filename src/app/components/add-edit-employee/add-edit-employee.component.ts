import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDepartment } from 'src/app/models/IDepartment';
import { employeeFormValues } from 'src/app/models/IEmployee';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {

  employee:employeeFormValues;
  departments:IDepartment[];
  constructor(private employeeService:EmployeeService,
    private departmentService:DepartmentService,
    private router:Router,
    private route:ActivatedRoute,) {
    this.employee = new employeeFormValues();
    this.departments =[];
   }

  ngOnInit(): void {
    if (this.route.snapshot.url[1].path === 'edit') {
      this.loadEmployeeData();
    }

    this.loadAllDepartments();
  }

  loadEmployeeData(){
    let id = this.route.snapshot.paramMap.get('id')!.toString();
    this.employeeService.getEmployeeById(id)
    .subscribe((response:any)=>{
      this.employee = {...response}
    })
  }

  loadAllDepartments(){
    this.departmentService.getAllDepartments().subscribe((response:any)=>{
      this.departments = response;
    })
  }


  onSubmit(employee:employeeFormValues){
    console.log(employee);
    if (this.route.snapshot.url[1].path === 'edit') {
      const updatedEmployee = {...this.employee, ...employee};
      let id  = parseInt(this.route.snapshot.paramMap.get('id')!);
      this.employeeService.updateEmployee(updatedEmployee, id).subscribe((response: any) => {
        this.router.navigate([`employee`]);
      });
    } else {
      const newDepartment = {...employee};
      this.employeeService.addEmployee(newDepartment).subscribe((response: any) => {
        this.router.navigate([`employee`]);
      });
    }
  }

}
