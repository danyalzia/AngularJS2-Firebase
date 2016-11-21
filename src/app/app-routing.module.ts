import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import {Component} from '@angular/core';

import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { ShowdataComponent } from "./showdata/showdata.component";

import { AuthGuard } from "./auth.guard";

@NgModule({
  imports: [
    RouterModule.forRoot([
		// Let's redirect it to default signin page
		{ path: '', redirectTo: '/signin', pathMatch: 'full' },
		{ path: 'signup', component: SignupComponent },
		{ path: 'signin', component: SigninComponent },
		{ path: 'showdata', component: ShowdataComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
