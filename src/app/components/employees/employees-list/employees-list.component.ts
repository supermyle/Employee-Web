import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [
    {
      id: '5b4ed4cc-f31b-444b-a06e-05ce7b322892',
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: 9742341253,
      salary: 60000,
      department: 'Human Resources'
    },
    {
      id: 'k4jh12lh-j4k2-jks4-1o2t-421kljf9n167',
      name: 'Jane Chalmers',
      email: 'jane.chalmers@email.com',
      phone: 4125326234,
      salary: 70000,
      department: 'Information Technology'
    },
    {
      id: '214jkj15-fas5-fd2m-1k20-sa12n1kaslzx',
      name: 'Adam Smith',
      email: 'adam.smith@email.com',
      phone: 2146442132,
      salary: 80000,
      department: 'Sales'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
