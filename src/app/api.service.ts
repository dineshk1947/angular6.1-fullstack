import { Injectable } from  '@angular/core';
import { HttpClient} from  '@angular/common/http';


@Injectable({
providedIn:  'root'
})

export  class  APIService {
  
    API_URL  =  'http://localhost:3000';
    constructor(private  httpClient:  HttpClient) {}
    getContacts(){
        return  this.httpClient.get(`${this.API_URL}/api/userDetails`);
    }
    createContact(contact){
        return  this.httpClient.post(`${this.API_URL}/api/userDetails`,contact);
    }
    deleteContact(_id){
        return  this.httpClient.delete(`${this.API_URL}/api/userDetails/`+_id);
    }
    updateContact(contact, _id){
        alert("updated successfully");
        return  this.httpClient.put(`${this.API_URL}/api/userDetails/`+_id,contact);
    }
    
}