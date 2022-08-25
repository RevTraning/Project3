package com.revature.spring_hrms_project2.services;

import com.revature.spring_hrms_project2.dto.Credentials;
import com.revature.spring_hrms_project2.exceptions.UserNotFoundException;
import com.revature.spring_hrms_project2.models.Doctor;
import com.revature.spring_hrms_project2.models.Patient;
import com.revature.spring_hrms_project2.repositories.DoctorRepo;
import com.revature.spring_hrms_project2.repositories.PatientRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class DoctorService {

    private Logger log = LoggerFactory.getLogger(this.getClass());
    private DoctorRepo doctorRepo;

    @Autowired
    public DoctorService(DoctorRepo doctorRepo) {
        super();
        this.doctorRepo = doctorRepo;
    }

    public Doctor getByCredentials(Credentials creds) {

        Optional<Doctor> doctorInDb = doctorRepo.findByEmailAndPassword(creds.getEmail(), creds.getPassword());

        if (doctorInDb.isPresent()) {
            log.info("Found doctor with email {}", creds.getEmail());
            return doctorInDb.get();
        } else {
            log.warn("Email & password combination did not match for doctor {}", creds.getEmail());
            return null;
        }
    }

    @Transactional(readOnly = true)
    public Set<Doctor> getAll() {

        return doctorRepo.findAll().stream().collect(Collectors.toSet());
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public Doctor add(Doctor d){
        return doctorRepo.save(d);
    }

    @Transactional(propagation = Propagation.REQUIRED)
    public Doctor update(Doctor d, int id){

        return doctorRepo.findById(id)
                .map(doctor-> {
                    doctor.setName(d.getName());
                    doctor.setEmail(d.getEmail());
                    return doctorRepo.save(doctor);
                })
                .orElseGet(() -> {
                    d.setdId(id);
                    return doctorRepo.save(d);
                });
    }

    @Transactional(propagation = Propagation.REQUIRED)
    public void remove(int id) {
        doctorRepo.deleteById(id);
    }


    @Transactional(readOnly = true)
    public Doctor getById(int id) {

        if (id <= 0) {
            log.warn("Id cannot be <= 0. Id passed was: {}", id);
            return null;
        } else {
            return doctorRepo.findById(id).orElseThrow(() -> new UserNotFoundException("No doctor found with id " + id));
        }

    }

    public Doctor getByEmail(String email) {
        return doctorRepo.findByEmail(email).orElseThrow(()-> new UserNotFoundException("No doctor found with email"+email));
    }
}
