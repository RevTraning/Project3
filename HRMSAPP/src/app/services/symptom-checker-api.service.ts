import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, queueScheduler } from 'rxjs';
import { LabResults } from '../models/labResults';

@Injectable({
  providedIn: 'root'
})
export class SymptomCheckerAPIService {

  constructor(private http:HttpClient) { }


getSymptoms() {
    let queryParams = new HttpParams();
    const http = require("https");

    const options = {
	    "method": "GET",
	    "hostname": "priaid-symptom-checker-v1.p.rapidapi.com",
	    "port": null,
	    "path": "/symptoms?language=en-gb&format=json",
	    "headers": {
		  "X-RapidAPI-Key": "60df3e7da8msh1aa6f035af42e71p1cd8eajsnf2619a4e38eb",
		  "X-RapidAPI-Host": "priaid-symptom-checker-v1.p.rapidapi.com",
		  "useQueryString": true
	  }
};

    const req = http.request(options, function (res) {
	  const chunks = [];
    //Chunks refers to individual symptom objects, which just consist of a string Name and int ID

	    res.on("data", function (chunk) {
		    chunks.push(chunk);
	    });

	    res.on("end", function () {
		    const body = Buffer.concat(chunks);
		    console.log(body.toString());
	    });
    });

  req.end();
  console.log(req);
  //req should be an array of objects
  return req;
}

getDiagnosis(){
  //todo setup query string to take patient symptoms
  const http = require("https");

  const options = {
	  "method": "GET",
	  "hostname": "priaid-symptom-checker-v1.p.rapidapi.com",
	  "port": null,
	  "path": "/diagnosis?language=en-gb&symptoms=%5B234%2C11%5D&year_of_birth=1984&gender=male&format=json",
	  "headers": {
		"X-RapidAPI-Key": "60df3e7da8msh1aa6f035af42e71p1cd8eajsnf2619a4e38eb",
		"X-RapidAPI-Host": "priaid-symptom-checker-v1.p.rapidapi.com",
		"useQueryString": true
	  }
  };

  const req = http.request(options, function (res) {
	const chunks = [];

	  res.on("data", function (chunk) {
		  chunks.push(chunk);
	  });

	  res.on("end", function () {
		  const body = Buffer.concat(chunks);
		  console.log(body.toString());
	  });
  });

  req.end();

}

}
