import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { WelcomedashboardComponent } from './welcomedashboard/welcomedashboard.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ListedvehicalsComponent } from './listedvehicals/listedvehicals.component';
import { BookingComponent } from './bookinghistory/booking/booking.component';
import { RegiserusersComponent } from './admindashboard/regiserusers/regiserusers.component';
import { TotalbookingComponent } from './admindashboard/totalbooking/totalbooking.component';
import { ListedbrandsComponent } from './admindashboard/listedbrands/listedbrands.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    LoginsignupComponent,
    AdminComponent,
    WelcomedashboardComponent,
    ContactusComponent,
    BookinghistoryComponent,
    AdmindashboardComponent,
    ListedvehicalsComponent,
    BookingComponent,
    RegiserusersComponent,
    TotalbookingComponent,
    ListedbrandsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
