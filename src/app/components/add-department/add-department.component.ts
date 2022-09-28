import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { departmentFormValues } from 'src/app/models/IDepartment';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  department:departmentFormValues
  constructor(private departmentService:DepartmentService,
    private router:Router,
    private route:ActivatedRoute,) {
    this.department = new departmentFormValues();
   }

  ngOnInit(): void {
    if (this.route.snapshot.url[1].path === 'edit') {
      this.loadDepartmentData();
    }
  }

  loadDepartmentData(){
    let id = this.route.snapshot.paramMap.get('id')!.toString();
    this.departmentService.getDepetmentById(id)
    .subscribe((response:any)=>{
      this.department = {...response}
    })
  }

  onSubmit(department:departmentFormValues){
    if (this.route.snapshot.url[1].path === 'edit') {
      const updatedDepartment = {...this.department, ...department};
      let id  = parseInt(this.route.snapshot.paramMap.get('id')!);
      this.departmentService.updateDepartment(updatedDepartment, id).subscribe((response: any) => {
        this.router.navigate([`department`]);
      });
    } else {
      const newDepartment = {...department};
      this.departmentService.addDepartment(newDepartment).subscribe((response: any) => {
        this.router.navigate([`department`]);
      });
    }
  }
 
}
