import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';



  
@Component({
  selector: 'app-patient-splash-page',
  templateUrl: './patient-splash-page.component.html',
  styleUrls: ['./patient-splash-page.component.css']
})
export class PatientSplashPageComponent implements OnInit {

  constructor(public logser: LoginService) { }

  ngOnInit(): void {
  }
  isDoc: number = Number(window.localStorage.getItem("userFlag"));
}
