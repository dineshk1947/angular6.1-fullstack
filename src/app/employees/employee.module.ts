    
import { NgModule} from  '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeRoutingModule} from './employee-routing.module';
import {EmployeeComponent} from './employee.component';
import {FormsModule } from '@angular/forms';
@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        EmployeeRoutingModule
    ],
    declarations : [EmployeeComponent]
})
export class EmployeeModule {}
