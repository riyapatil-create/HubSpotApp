import { Component } from '@angular/core';
import { Customer } from './Customer';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-bookmeet',
  templateUrl: './bookmeet.component.html',
  styleUrls: ['./bookmeet.component.css']
})
export class BookmeetComponent {
  cObj:Customer;
  cusList:Customer[];
  cusForm:FormGroup;
  constructor(private http:HttpClient,private fb:FormBuilder,private cusservice:CustomerService){
    this.cObj=new Customer();
    this.cusList=[];
    
    this.cusForm=fb.group({
      // id:"",  
      username:"",
      designation:"",
      email:"",
      checkin:"",
      checkout:"",
      numberofRooms:"",
      person:"",
      location:"",
      duration:"",
    })
  }
  ngOnInit(): void {
    
    // alert("hello")
    this.cusservice.getCustomer().subscribe(
      noteData => this.cusList = noteData,
      err => console.log(err)
    )
    // this.getCustomersinfo();
  }
  cusBooking(cusForm:FormGroup){
    // this.http.post<any>("http://localhost:8080/api/v1/addCustomer",this.cusForm.value).subscribe(
      
    //   res=>{
    //     this.cusForm.reset();
    //   },
    //   err=>{
    //     alert("here")
    //     console.log("here error");
    //   }
    // )
    this.cObj=cusForm.value;
    this.cusList.push(this.cObj);
    if(cusForm.valid){
      this.cusForm.reset(),
      this.cusservice.addCustomer(this.cObj).subscribe(
        data=>{},
        err=>console.log()
        
      )
      console.log(this.cObj.username);
      console.log(this.cObj.designation);
      console.log(this.cObj.email);
      console.log(this.cObj.checkin);
      console.log(this.cObj.checkout);
      console.log(this.cObj.email);
      console.log(this.cObj.numberofRooms);
      console.log(this.cObj.person);
      console.log(this.cObj.location);
      console.log(this.cObj.duration);
    }
    
  }
}
