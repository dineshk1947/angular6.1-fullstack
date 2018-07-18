
import{ async, ComponentFixture,TestBed} from '@angular/core/testing';
import { EmployeeComponent} from './employee.component';
describe('EmployeeComponent', ()=>{
    let component : EmployeeComponent;
    let fixture : ComponentFixture <EmployeeComponent>;
    beforeEach(()=>{
        fixture = TestBed.createComponent(EmployeeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });
    it('should create',()=>{
        expect(component).toBeTruthy();
    });
})

