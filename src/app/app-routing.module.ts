import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserRegistartionComponent } from './user-registartion/user-registartion.component';
import { UsrregapiComponent } from './usrregapi/usrregapi.component';
import { HttpUsersComponent } from './http-users/http-users.component';
import { ParentComponent } from './parent/parent.component';
import { Child2Component } from './child2/child2.component';
import { Child1Component } from './parent/child1/child1.component';

const routes: Routes = [
  {path:'user', component: UserComponent},
  {path:'empdetail/:uId', component:UserDetailComponent},
  {path:'usrreg',component:UserRegistartionComponent},
  {path:'usrregapi',component:UsrregapiComponent},
  {path:'httpuser',component:HttpUsersComponent},
  {path:'parent',component:ParentComponent,children:[
    {path:"child1",component:Child1Component},
    {path:"child2",component:Child2Component},
  ]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
