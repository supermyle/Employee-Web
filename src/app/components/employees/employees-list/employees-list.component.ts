import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/models/employee.model';

const employees: Employee[] = [
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
  },
  {
    id: 'k521nj1l-csa2-fask-2100-kscmxpqwl512',
    name: 'Robert Zarella',
    email: 'robert.zarella@email.com',
    phone: 2315367532,
    salary: 65000,
    department: 'Claims'
  },
  {
    id: '12jfsk29-vsa6-21ks-120n-21kc9wm2mszl',
    name: 'Steve Smith',
    email: 'steve.smith@email.com',
    phone: 2110692930,
    salary: 55000,
    department: 'Security'
  },
  {
    id: '31ks9k2n-21ks-ska2-aczm-213lkas0zxml',
    name: 'John Adams',
    email: 'john.adams@email.com',
    phone: 1291028664,
    salary: 72500,
    department: 'Information Technology'
  }
];

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'salary', 'department'];
  dataSource: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { 
    console.log(employees);
    this.dataSource = new MatTableDataSource(employees);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
