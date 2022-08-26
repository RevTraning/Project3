package com.revature.spring_hrms_project2.repositories;

import com.revature.spring_hrms_project2.models.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PatientRepo extends JpaRepository<Patient, Integer> {


    Optional<Patient> findByEmailAndPassword(String email, String password);

    Optional<Patient> findByEmail(String email);

    List<Patient> findByOrderByName();

    // custom query
    @Query("FROM Patient WHERE email LIKE %:pattern")
    List<Patient> findByEmailContains(String pattern);

}
