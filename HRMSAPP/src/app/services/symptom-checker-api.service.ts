import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, queueScheduler } from 'rxjs';
import { LabResults } from '../models/labResults';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class SymptomCheckerAPIService {
url: string = 'https://priaid-symptom-checker-v1.p.rapidapi.com';
  constructor(private http:HttpClient, private logserv: LoginService) { }
 
getSym(sym: any): Observable<LabResults[]>{
	let queryParams = new HttpParams();
    queryParams = queryParams.append("language",'en-gb');
    queryParams = queryParams.append("symptoms",`[${sym}]`);
	queryParams = queryParams.append("year_of_birth",this.logserv.currentUserBy);
	queryParams = queryParams.append("gender",this.logserv.currentUserG);
	queryParams = queryParams.append("format",'json');
	let httpOptions = {
		headers: new HttpHeaders({
			'Content-Type' : 'application/json',
			'X-RapidAPI-Key': '60df3e7da8msh1aa6f035af42e71p1cd8eajsnf2619a4e38eb',
		    'X-RapidAPI-Host': 'priaid-symptom-checker-v1.p.rapidapi.com'
		}),
		params:queryParams
	}
	return this.http.get<LabResults[]>(`${this.url}/diagnosis`,httpOptions);

}

}
