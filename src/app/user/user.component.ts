import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  title = 'user';
  userName: string = "rajvir";
  user: Array<any> = [];
  tempuser:Array<any>=[];
  sortname:string = "ase";

  uName:string;
  

  filterData(value){

    console.log("function called..",value)
    this.user = this.tempuser.filter(i=>i.name.toLowerCase().indexOf(value.toLowerCase())!= -1);
  }
  sort()
  {
    console.log("sort function called..")
    
    this.user = this.tempuser.sort((i,j)=>(i.name > j.name)? 1 :-1)
  }

  ngOnInit(): void {
    this.user=[
      {name:'pri',email:'pri@gmail.com',password:'pri1',status:false},
      {name:'pri12',email:'pri12@gmail.com',password:'pri12',status:false},
    ];
    this.tempuser= this.user;
  }

}
