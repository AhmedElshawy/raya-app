import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { AddEditEmployeeComponent } from './components/add-edit-employee/add-edit-employee.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '', component:HomeComponent,
  },
  {
    path:'employee',component:EmployeeComponent
  },
  {
    path:'employee/add',component:AddEditEmployeeComponent
  },
  {
    path:'employee/edit/:id' ,component:AddEditEmployeeComponent
  },
  {
    path:'department',component:DepartmentComponent
  },
  {
    path:'department/add',component:AddDepartmentComponent
  },
  {
    path:'department/edit/:id',component:AddDepartmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
