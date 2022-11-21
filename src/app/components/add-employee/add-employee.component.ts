import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: '',
    salary: '',
    department: ''
  };

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  addEmployee() {
    this.employeeService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next: (employee) => {
        console.log(employee);
      },
      error: (response) => {
        console.error(response);
      }
    });
  }
}
