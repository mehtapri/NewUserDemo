import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-usrregapi',
  templateUrl: './usrregapi.component.html',
  styleUrls: ['./usrregapi.component.css']
})
export class UsrregapiComponent implements OnInit {

  constructor(private service:DataserviceService) { }

  myForm:FormGroup;
  status:string="..";
  submit()
  {
    console.log(this.myForm)
    console.log("value",this.myForm.value)
    this.service.addUser(this.myForm.value).subscribe(res=>{
      if(res==1){
        console.log("Data Added")
        this.status="Data Added"
      }
      else{
        this.status="Data Not Added"
      }
    },err=>{
      console.log("Error")
    
    })
  }
  ngOnInit(): void {
    this.myForm= new FormGroup(
      {
        uName:new FormControl(''),
        uEmail:new FormControl(''),
    
      }
    )
  }

}
