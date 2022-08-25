package com.revature.spring_hrms_project2.services;

import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.revature.spring_hrms_project2.dto.Credentials;
import com.revature.spring_hrms_project2.exceptions.UserNotFoundException;
import com.revature.spring_hrms_project2.models.Patient;
import com.revature.spring_hrms_project2.repositories.PatientRepo;



@Service
public class PatientService {
    private Logger log = LoggerFactory.getLogger(this.getClass());
    private PatientRepo patientRepo;

    @Autowired
    public PatientService(PatientRepo patientRepo) {
        super();
        this.patientRepo = patientRepo;
    }


    // the AuthController will pass the creds DTO object to this method
    public Patient getByCredentials(Credentials creds) {

        Optional<Patient> patientInDb = patientRepo.findByEmailAndPassword(creds.getEmail(), creds.getPassword());

        if (patientInDb.isPresent()) {
            log.info("Found patient with email {}", creds.getEmail());
            return patientInDb.get();
        } else {
            log.warn("Email & password combination did not match for patient {}", creds.getEmail());
            return null;
        }
    }

    @Transactional(readOnly = true)
    public Set<Patient> getAll() {
        // here we are using the stream API to transform the List to a Set to avoid
        // duplicates
        return patientRepo.findAll().stream().collect(Collectors.toSet());
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public Patient add(Patient p){
       return patientRepo.save(p);
    }

    @Transactional(propagation = Propagation.REQUIRED)
    public Patient update(Patient p, int id){
       // return patientRepo.save(p);
        return patientRepo.findById(id)
                .map(patient-> {
                    patient.setName(p.getName());
                    patient.setEmail(p.getEmail());
                    return patientRepo.save(patient);
                })
                .orElseGet(() -> {
                    p.setpId(id);
                    return patientRepo.save(p);
                });
    }



    @Transactional(propagation = Propagation.REQUIRED) // default setting of transactions in Spring
    public void remove(int id) {
        patientRepo.deleteById(id);
    }


    @Transactional(readOnly = true)
    public Patient getById(int id) {

        if (id <= 0) {
            log.warn("Id cannot be <= 0. Id passed was: {}", id);
            return null;
        } else {
            return patientRepo.findById(id).orElseThrow(() -> new UserNotFoundException("No patient found with id " + id));
        }

    }

    public Patient getByEmail(String email) {
        return patientRepo.findByEmail(email).orElseThrow(()-> new UserNotFoundException("No patient found with email"+email));
    }
}
