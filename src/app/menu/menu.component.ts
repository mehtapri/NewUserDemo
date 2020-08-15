import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];
  constructor() { }
  menuArray: Array<any> = [];
  ngOnInit(): void {
    this.menuArray=[
    
    {link:'user', title: 'UserComponent'},
  {link:'empdetail/:uId', title:'UserDetailComponent'},
  {link:'usrreg',title:'UserRegistartionComponent'},
  {link:'usrregapi',title:'UsrregapiComponent'},
  {link:'httpuser',title:'HttpUsersComponent'},
  {link:'parent',title:'ParentComponent'}
    ];
  }

}
