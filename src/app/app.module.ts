import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AngularFireModule } from 'angularfire2';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerService } from './shared/customer.service';

import { environment } from '../environments/environment';
import { CustomersListComponent } from './customers-list/customers-list.component';
//import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './components/offers/offers.component';
//import { RegisterComponent } from './users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Page404Component } from './components/page404/page404.component';
import { ListBooksComponent } from './components/admin/list-books/list-books.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomersListComponent,
    LoginComponent,
    HomeComponent,
    OffersComponent,
    RegisterComponent,
    ProfileComponent,
    NavbarComponent,
    Page404Component,
    ListBooksComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,

    FormsModule,

    AppRoutingModule
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
