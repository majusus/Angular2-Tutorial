import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    templateUrl: 'app/app.component.html?v=${new Date().getTime()}', //last part to 
                                                                       //clear cache and load from server not browser
})
export class AppComponent  {
    pageHeader: string = 'Employee Details';
    imagePath: string = 'http://pragimtech.com/images/logo.jpg'; //interpolation example:1
    imagePath2: string = 'images/logo.jpg';  //interpolation example:2
    firstName: string = 'Susham';
    lastName: string = 'Majumder';
    isDisabled: boolean = true; //property binding example 2 non-string values

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}
