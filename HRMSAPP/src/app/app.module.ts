import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Components

import { PatientSignupComponent } from './components/patient-signup/patient-signup.component';
import { LoginComponent } from './components/login/login.component';
import { DoctorSignupComponent } from './components/doctor-signup/doctor-signup.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { ViewAppotemntsComponent } from './components/view-appotemnts/view-appotemnts.component';
import { BookAppotmentsComponent } from './components/book-appotments/book-appotments.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PatientSplashPageComponent } from './components/patient-splash-page/patient-splash-page.component';
import { MessageProviderComponent } from './components/message-provider/message-provider.component';
import { LabFormComponent } from './components/lab-form/lab-form.component';
import { ViewLabResultsComponent } from './components/view-lab-results/view-lab-results.component';
import { DatepickerApComponent } from './components/datepicker-ap/datepicker-ap.component';

//materials
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,

    PatientSignupComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ProfileComponent,

    PatientSplashPageComponent,
    MessageProviderComponent,
    ViewAppotemntsComponent,
    BookAppotmentsComponent,
    LabFormComponent,
    ViewLabResultsComponent,

    DoctorSignupComponent,
    DatepickerComponent,
    DatepickerApComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatStepperModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatToolbarModule
    
  ],

  providers: [CookieService, DatepickerApComponent, DatepickerComponent, MatDatepickerModule, MatNativeDateModule],

  bootstrap: [AppComponent]
})
export class AppModule { }
