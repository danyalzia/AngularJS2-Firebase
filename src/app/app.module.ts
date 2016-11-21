import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ShowdataComponent } from './showdata/showdata.component';

import { AppRoutingModule } from './app-routing.module';

import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";

import {DataTableModule} from "angular2-datatable";

import {
  ReactiveFormsModule
} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ShowdataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	AppRoutingModule,
	DataTableModule,
	ReactiveFormsModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
