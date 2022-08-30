import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, queueScheduler } from 'rxjs';
import { LabResults } from '../models/labResults';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class SymptomCheckerAPIService {
url: string = 'https://priaid-symptom-checker-v1.p.rapidapi.com'
  constructor(private http:HttpClient, private logser: LoginService) { }
//   httpOptions = {
// 	headers: new HttpHeaders({
// 		'Content-Type' : 'application/json',
// 		'X-RapidAPI-Key' : '60df3e7da8msh1aa6f035af42e71p1cd8eajsnf2619a4e38eb',
//         'X-RapidAPI-Host': 'priaid-symptom-checker-v1.p.rapidapi.com'
// 	})
//   }

getSym(symArr: any): Observable<LabResults[]>{
	let queryParams = new HttpParams();
	queryParams = queryParams.append("language",'en-gb');
    queryParams = queryParams.append("symptoms",10);
	queryParams = queryParams.append("year_of_birth",this.logser.currentUserBD);
	queryParams = queryParams.append("gender",this.logser.currentUserG);
	queryParams = queryParams.append("format",'json');

	let HttpOptionsI = {
		headers: new HttpHeaders({
			'Content-Type' : 'application/json',
			'X-RapidAPI-Key' : '60df3e7da8msh1aa6f035af42e71p1cd8eajsnf2619a4e38eb',
			'X-RapidAPI-Host': 'priaid-symptom-checker-v1.p.rapidapi.com'
		}), queryParams
	  }
	return this.http.get<LabResults[]>(`${this.url}/diagnosis`,HttpOptionsI)
}
// getSymptoms() {
//     let queryParams = new HttpParams();
// 	queryParams = queryParams.append("language",'en-gb');
//     queryParams = queryParams.append("symptoms",symArr);
// 	queryParams = queryParams.append("year_of_birth",dob);
// 	queryParams = queryParams.append("gender",G);
// 	queryParams = queryParams.append("format",'json');

//     const http = require("https");
	
//     const options = {
// 	    "method": "GET",
// 	    "hostname": "priaid-symptom-checker-v1.p.rapidapi.com",
// 	    "port": null,
// 	    "path": "/symptoms?language=en-gb&format=json",
// 	    "headers": {
// 		  "X-RapidAPI-Key": "60df3e7da8msh1aa6f035af42e71p1cd8eajsnf2619a4e38eb",
// 		  "X-RapidAPI-Host": "priaid-symptom-checker-v1.p.rapidapi.com",
// 		  "useQueryString": true
// 	  }
// };

//     const req = http.request(options, function (res) {
// 	  const chunks = [];
//     //Chunks refers to individual symptom objects, which just consist of a string Name and int ID

// 	    res.on("data", function (chunk) {
// 		    chunks.push(chunk);
// 	    });

// 	    res.on("end", function () {
// 		    const body = Buffer.concat(chunks);
// 		    console.log(body.toString());
// 	    });
//     });

//   req.end();
//   console.log(req);
//   //req should be an array of objects
//   return req;
// }

// getDiagnosis(){
//   //todo setup query string to take patient symptoms
//   const http = require("https");

//   const options = {
// 	  "method": "GET",
// 	  "hostname": "priaid-symptom-checker-v1.p.rapidapi.com",
// 	  "port": null,
// 	  "path": "/diagnosis?language=en-gb&symptoms=%5B234%2C11%5D&year_of_birth=1984&gender=male&format=json",
// 	  "headers": {
// 		"X-RapidAPI-Key": "60df3e7da8msh1aa6f035af42e71p1cd8eajsnf2619a4e38eb",
// 		"X-RapidAPI-Host": "priaid-symptom-checker-v1.p.rapidapi.com",
// 		"useQueryString": true
// 	  }
//   };

//   const req = http.request(options, function (res) {
// 	const chunks = [];

// 	  res.on("data", function (chunk) {
// 		  chunks.push(chunk);
// 	  });

// 	  res.on("end", function () {
// 		  const body = Buffer.concat(chunks);
// 		  console.log(body.toString());
// 	  });
//   });

//   req.end();

// }

}
