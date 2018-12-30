import { Component } from '@angular/core';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html?v=${new Date().getTime()}', // last part to load 
    styleUrls: ['app/employee/employee.component.css?v=${new Date().getTime()}'] //from server not browser for cache issue
    //,styles: ['table{color: darkgreen;font- family: Arial, Helvetica, sans - serif; font- size: large;border - collapse: collapse;}', 'td{border: 1px solid black;}']
})

export class EmployeeComponent {
    firstName: string = 'Tom';
    lastName: string = 'Hopkins';
    gender: string = 'Male';
    age: number = 20;
}

