
import { Component,OnInit } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { APIService } from  '../api.service';
@Component({
    selector:'login-select',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit{
      contacts:  any;
    constructor(private  apiService:  APIService,http:Http){
        LoginComponent
    }
    ngOnInit(){
        this.getContacts();
        
    }
    public  getContacts(){
        this.apiService.getContacts().subscribe((data:any) => {
            this.contacts  =  data.message;
            //console.log("checking for the data comming...",data.message);
        });
    }
    contact:object ={};
    createContact(contacts){
            console.log("checking for the contacts inputs comming...",contacts);
        this.contact  = {
            "name": contacts.name,
            "email": contacts.email,
            "phone": contacts.phone,
            "pwd": contacts.pwd,
            "pdwRepeat": contacts.pwdR
        };
        this.apiService.createContact(this.contact).subscribe((res:Response) => {
            alert("Created Successfully.")
            // this.contact = res.json();
            console.log("checking for the response after post...",res);
        });
    };
    deleteContact(_id){
       if(confirm("Are You sure ?")){
        this.apiService.deleteContact(_id).subscribe((data:any) => {
            alert("Deleted Successfully.")
            console.log("checking for the response after delete...",data);
        });

       }
    }
    updateContact(_id){
         this.apiService.updateContact(this.contact,_id).subscribe((data:any) => {
             alert("Updeted Successfully.")
             console.log("checking for the response after update...",data);
         });
     }
 }


