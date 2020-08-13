import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,private service:DataserviceService) { }

  user:User;

  ngOnInit(): void {
    var uId = this.route.snapshot.params.uId;
    this.service.viewById(uId).subscribe(res=>{
      this.user=res;
      console.log("res->",res)
    })
    console.log(this.route.snapshot.params.uId)
  }

}
