import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserRegistartionComponent } from './user-registartion/user-registartion.component';
import { UsrregapiComponent } from './usrregapi/usrregapi.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {  ReactiveFormsModule,FormsModule} from "@angular/forms";
import {AccordionModule} from 'primeng/accordion';     
import {MenuItem} from 'primeng/api';  
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import { HttpUsersComponent } from './http-users/http-users.component';
import {DropdownModule} from "primeng/dropdown";
import { ChartModule } from 'primeng/primeng';
import { ParentComponent } from './parent/parent.component';
import { Child2Component } from './child2/child2.component';
import { Child1Component } from './parent/child1/child1.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MenuComponent } from './menu/menu.component';
import {MenubarModule} from 'primeng/menubar';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserRegistartionComponent,
    UsrregapiComponent,
    UserDetailComponent,
    HttpUsersComponent,
    ParentComponent,
    Child2Component,
    Child1Component,
    MenuComponent,
    FormsDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule,
    TableModule,
    ChartModule,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule,
    MenubarModule,
    LoadingBarRouterModule,
    LoadingBarModule    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
