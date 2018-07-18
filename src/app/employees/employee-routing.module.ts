
import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { EmployeeComponent} from './employee.component';
const routes : Routes = [
    {
        path:'edetails',
        component:EmployeeComponent
    }
]; 
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers:[]
})
export class EmployeeRoutingModule{}
