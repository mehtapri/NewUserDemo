import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})
export class FormsDemoComponent implements OnInit {

  constructor() { }

  streams:string[]=['science','comm','arts']
  commSelection:string[]=['ca','cs','mba'];
  commselectedopt:string;
  selectedStream:string;
  myForm:FormGroup;

  submit(){

    console.log("data =",this.myForm.value)

  }
  ngOnInit(): void {
    this.myForm = new FormGroup(
      {
        comm_12th_marks:new FormControl(''),
        science_neet_marks:new FormControl(''),
        arts_10th_marks:new FormControl('')
      }
    )
  }
  changeCombo(event){

    console.log("val",event.value)

  }

}