
import { Component,OnInit } from '@angular/core';
import { APIService } from  '../api.service';
@Component({
    selector:'login-select',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit{
      contacts:  any;
    constructor(private  apiService:  APIService){
        LoginComponent
    }
    ngOnInit(){
        this.getContacts();
        
    }
    public  getContacts(){
        this.apiService.getContacts().subscribe((data:any) => {
            this.contacts  =  data.message;
            console.log("checking for the data comming...",data.message);
        });
    }
    
    createContact(){
        var  contact  = {};
        this.apiService.createContact(contact).subscribe((response) => {
            console.log(response);
        });
    };
 }


