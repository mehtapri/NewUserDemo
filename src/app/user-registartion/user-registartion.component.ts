import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-registartion',
  templateUrl: './user-registartion.component.html',
  styleUrls: ['./user-registartion.component.css']
})
export class UserRegistartionComponent implements OnInit {

  myForm:FormGroup

  user_name:string="";
  user_email:string="";

  constructor() { }

  submit(){
    console.log('Name:',this.myForm.value.user_name)
    console.log('Email:',this.myForm.value.user_email)
    
    console.log('UserName',this.myForm.get('user_name').value)
    this.user_name=this.myForm.value.user_name;
    this.user_email=this.myForm.value.user_email;
    console.log(this.myForm)
  }
  ngOnInit(): void {

    this.myForm=new FormGroup({
      user_name:new FormControl('',Validators.required),
      user_email:new FormControl('')
    })
  }

}
