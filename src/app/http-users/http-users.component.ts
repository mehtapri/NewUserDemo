import { Component, OnInit } from '@angular/core';
import {DataserviceService } from '../dataservice.service';
import { User } from '../user';
import {MessageService} from 'primeng/api';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-http-users',
  templateUrl: './http-users.component.html',
  styleUrls: ['./http-users.component.css']
})
export class HttpUsersComponent implements OnInit {

  constructor(private service: DataserviceService,private messageService: MessageService) { }
  showSuccess(){
    this.messageService.add({severity:'success',summary:'Success',detail:'Message Content'});
  }

  user : Array<User> =[];
  user1 :User;
  resStatus : number;

  update(uId)
  {

  }

  delete(uId) {

    console.log(uId)
    this.service.deleteuser(uId).subscribe(res=>{

      this.messageService.add({severity:'warn', summary: 'warn', detail: 'Deleted'});
      if(res==1){
        console.log("Data Deleted")


        this.service.getUser().subscribe(res => {

          this.user = res;
          console.log(res)
        })
        
      }
      else{
        console.log("Data Not Deleted");
      }

    })

  }
  addUser() {

    this.user1 =
      { uId: 101, uName: 'dhaval', uEmail: 'dhaval@gmail.com', uAge: 22, uPassword: '123@dhaval'}
    this.service.addUser(this.user1).subscribe(res => {

      this.resStatus = res;
      if (this.resStatus == 1) {
        console.log("Data Added")
      }
      else {
        console.log("data not added...")
      }

    })
    this.service.getUser().subscribe(res => {

      this.user = res;
      console.log(res)
    })



  }


  ngOnInit(): void {
    this.service.getUser().subscribe(res => {

      this.user = res;
      console.log(res)
    })
  }

}
