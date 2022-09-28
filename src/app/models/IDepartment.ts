export interface IDepartment {
  id: number;
  name: string;
  location: string;
  floorNumber: string;
}

export class department implements IDepartment{
  id = 0;
  name = ""
  location = "";
  floorNumber = ""

  constructor(init?: department) {
    Object.assign(this, init);
  }
}

export interface IDepartmentToCreate{
  name: string;
  location: string;
  floorNumber: string;
}

export class departmentFormValues implements IDepartmentToCreate{
  name = '';
  location = '';
  floorNumber = '';

  constructor(init?: departmentFormValues) {
    Object.assign(this, init);
    }
}
