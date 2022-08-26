package com.revature.spring_hrms_project2.controllers;


import com.revature.spring_hrms_project2.dto.Credentials;
import com.revature.spring_hrms_project2.dto.PatientDTO;
import com.revature.spring_hrms_project2.models.Patient;
import com.revature.spring_hrms_project2.services.PatientService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/patient")
public class PatientController {

    private static final ModelMapper modelMapper = new ModelMapper();
    private PatientService ps;

    @Autowired

    public PatientController(PatientService ps) {
        this.ps = ps;
    }

    @PostMapping("/login")
    public Patient login(@RequestBody Credentials creds, HttpServletResponse response){

        Patient patient = ps.getByCredentials(creds);

        if (patient != null) {
            return patient;

        } else {
            // 3. otherwise deny and send 401 status
            response.setStatus(401); // 401 is an UNAUTHORIZED status
            return null; // TODO: maybe return Patient object with ID of 0
        }
    }
    @GetMapping
    public ResponseEntity<?> getPatient(@RequestParam(value = "email", required=false) final String email) {

        // If there is no query parameter for the email, return all Patients
        if (email == null || email.isEmpty()) {
            return ResponseEntity.ok(ps.getAll());
        } else
        {
            return ResponseEntity.ok(ps.getByEmail(email));

        }
    }


    @PostMapping("/add") // http://localhost:5000/Patients/add
    public ResponseEntity<Patient> addPatient(@Valid @RequestBody PatientDTO patientDto) {

        Patient patient = modelMapper.map(patientDto, Patient.class);
        return ResponseEntity.ok(ps.add(patient));
    }

    @GetMapping("/{id}") // allows the client to send the request http://localhost:5000/api/Patients/2
    public ResponseEntity<Patient> findPatientById(@PathVariable("id") int id) {
        return ResponseEntity.ok(ps.getById(id));
    }
/*
    @PutMapping("/{id}")
    public ResponseEntity<Patient> updatePatient(@Valid @RequestBody Patient patient) {
      //modelMapper.map(patientDto, Patient.class);
        return ResponseEntity.ok(ps.update(patient));
    }
*/
    @PutMapping("/{id}")
    public Patient updatePatient(@RequestBody Patient patient, @PathVariable int id) {
        return ps.update(patient, id);

    }

    @DeleteMapping("/{id}")
    public void removePatient(@PathVariable("id") int id) {
        ps.remove(id);
    }


}
