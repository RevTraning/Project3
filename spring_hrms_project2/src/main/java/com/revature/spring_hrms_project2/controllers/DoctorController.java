package com.revature.spring_hrms_project2.controllers;

import com.revature.spring_hrms_project2.dto.Credentials;
import com.revature.spring_hrms_project2.dto.DoctorDTO;
import com.revature.spring_hrms_project2.models.Doctor;
import com.revature.spring_hrms_project2.services.DoctorService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/doctor")
public class DoctorController {
    private static final ModelMapper modelMapper = new ModelMapper();
    private DoctorService ds;

    @Autowired

    public DoctorController(DoctorService ds) {
        this.ds = ds;
    }

    @PostMapping("/login")
    public Doctor login(@RequestBody Credentials creds, HttpServletResponse response){

        Doctor doctor = ds.getByCredentials(creds);

        if (doctor != null) {
            return doctor;

        } else {
            // 3. otherwise deny and send 401 status
            response.setStatus(401); // 401 is an UNAUTHORIZED status
            return null; // TODO: maybe return Doctor object with ID of 0
        }
    }
    @GetMapping
    public ResponseEntity<?> getDoctor(@RequestParam(value = "email", required=false) final String email) {

        // If there is no query parameter for the email, return all Doctors
        if (email == null || email.isEmpty()) {
            return ResponseEntity.ok(ds.getAll());
        } else
        {
            return ResponseEntity.ok(ds.getByEmail(email));

        }
    }


    @PostMapping("/add") // http://localhost:5000/Doctors/add
    public ResponseEntity<Doctor> addDoctor(@Valid @RequestBody DoctorDTO doctorDto) {

        Doctor doctor = modelMapper.map(doctorDto, Doctor.class);
        return ResponseEntity.ok(ds.add(doctor));
    }

    @GetMapping("/{id}") // allows the client to send the request http://localhost:5000/api/Doctors/2
    public ResponseEntity<Doctor> findDoctorById(@PathVariable("id") int id) {
        return ResponseEntity.ok(ds.getById(id));
    }
    /*
        @PutMapping("/{id}")
        public ResponseEntity<Doctor> updateDoctor(@Valid @RequestBody Doctor doctor) {
          //modelMapper.map(DoctorDto, doctor.class);
            return ResponseEntity.ok(ds.update(doctor));
        }
    */
    @PutMapping("/{id}")
    public Doctor updateDoctor(@RequestBody Doctor doctor, @PathVariable int id) {
        return ds.update(doctor, id);

    }

    @DeleteMapping("/{id}")
    public void removeDoctor(@PathVariable("id") int id) {
        ds.remove(id);
    }
}
