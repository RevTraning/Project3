import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(private logserv: LoginService) { }

  ngOnInit(): void {
  }

  email: string;
  password: string;
  login(){
    let newPat: Patient = new Patient(this.email, this.password)
    this.logserv.login(newPat);
    if(!this.logserv.validLogin){
      window.alert("Invalid Login");
    }
  }

}
