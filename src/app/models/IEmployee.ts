import { department, IDepartment } from './IDepartment';

export interface IEmployee {
  id: number;
  fisrtName: string;
  lastName: string;
  phone: string;
  address: string;
  title: string;
  salary: number;
  department: IDepartment;
}

export interface IEmployeeToCreate{
  fisrtName: string;
  lastName: string;
  phone: string;
  address: string;
  title: string;
  salary: number;
  department: IDepartment;
}

export class employeeFormValues implements IEmployeeToCreate{
  fisrtName="";
  lastName="";
  phone="";
  address="";
  title="";
  salary=0;
  department= new department();

  constructor(init?: employeeFormValues) {
    Object.assign(this, init);
    }
  
}
