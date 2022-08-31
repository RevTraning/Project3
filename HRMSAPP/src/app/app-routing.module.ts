import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PatientSignupComponent } from './components/patient-signup/patient-signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { MessageProviderComponent } from './components/message-provider/message-provider.component';
import { ViewAppotemntsComponent } from './components/view-appotemnts/view-appotemnts.component';
import { BookAppotmentsComponent } from './components/book-appotments/book-appotments.component';
import { LabFormComponent } from './components/lab-form/lab-form.component';
import { ViewLabResultsComponent } from './components/view-lab-results/view-lab-results.component';
import { DoctorSignupComponent } from './components/doctor-signup/doctor-signup.component';
import { combineLatest } from 'rxjs';
import { AppointmentStartComponent } from './components/appointment-start/appointment-start.component';
import { AppointmentInProgressComponent } from './components/appointment-in-progress/appointment-in-progress.component';
import { ViewAppointmentHistoryComponent } from './components/view-appointment-history/view-appointment-history.component';







const routes: Routes = [
  {path: 'signup/patientsignup', component: PatientSignupComponent},
  {path: 'signup/doctorsignup', component: DoctorSignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'pr', component: ProfileComponent},
  {path: 'home', component: HomeComponent},
  {path: 'patient', component:PatientSignupComponent},
  {path: 'message',component:MessageProviderComponent },
  {path: 'schedual', component: ViewAppotemntsComponent},
  {path: 'book', component:BookAppotmentsComponent},
  {path: 'labForm', component:LabFormComponent},
  {path: 'results',component: ViewLabResultsComponent},
  {path: "profile", component: AppointmentStartComponent},
  {path: "apptUpdate", component: AppointmentInProgressComponent},
  {path: "viewHistory", component:ViewAppointmentHistoryComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
