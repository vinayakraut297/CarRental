import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { AdminComponent } from './admin/admin.component';
import { WelcomedashboardComponent } from './welcomedashboard/welcomedashboard.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ListedvehicalsComponent } from './listedvehicals/listedvehicals.component';
import { BookingComponent } from './bookinghistory/booking/booking.component';
import { RegiserusersComponent } from './admindashboard/regiserusers/regiserusers.component';
import { ListedbrandsComponent } from './admindashboard/listedbrands/listedbrands.component';
import { TotalbookingComponent } from './admindashboard/totalbooking/totalbooking.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'loginsignup', component: LoginsignupComponent },
  { path: 'welcomedashboard', component: WelcomedashboardComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admindashboard', component: AdmindashboardComponent },
  { path: 'contactus', component: ContactusComponent }, 
  { path: 'bookinghistory', component: BookinghistoryComponent }, 
  { path: 'booking/:id', component: BookingComponent },
  { path: 'registerusers', component: RegiserusersComponent },
  { path: 'listbrands', component: ListedbrandsComponent },
  { path: 'totalbooking', component: TotalbookingComponent },
  { path: 'listedvehicals', component: ListedvehicalsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
