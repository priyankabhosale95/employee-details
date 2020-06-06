import { Component, OnInit } from '@angular/core';
import { Employee } from '../../common/employee';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : Employee[]=[];

  constructor(private _employeeService : EmployeeService ){ }


  ngOnInit() {
    this.listEmployees();
  }

 listEmployees(){
       this. _employeeService.getEmployees().subscribe(
         data=> {
          console.log(data);
          this.employees = data;
          console.log("Array data is with length "+this.employees.length);
          console.log(this.employees[0].id+" "+this.employees[0].name+" "+this.employees[0].gender+" "+this.employees[0].role+" "+this.employees[0].dateOfBirth+" "+this.employees[0].imageUrl);     
          console.log(this.employees[1].id+" "+this.employees[1].name+" "+this.employees[1].gender+" "+this.employees[1].role+" "+this.employees[1].dateOfBirth+" "+this.employees[1].imageUrl);
        }
       )
 }

}
