import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import {AuthGuardService } from './auth-guard.service';
import {HttpClientModule} from '@angular/common/http';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    ClientFormComponent,
    ClientsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
