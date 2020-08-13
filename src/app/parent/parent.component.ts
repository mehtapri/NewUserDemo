import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private loading:LoadingBarService) { }

  start(){
    console.log("start")
    this.loading.start();
    setTimeout(() => {
      
      this.loading.stop();
    },2000);

  }
  stop(){

    this.loading.stop();
  }
  ngOnInit(): void {
  }

}
