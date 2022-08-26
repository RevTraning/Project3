package com.revature.spring_hrms_project2.repositories;

import com.revature.spring_hrms_project2.models.Doctor;
import com.revature.spring_hrms_project2.models.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface DoctorRepo extends JpaRepository<Doctor, Integer> {


    Optional<Doctor> findByEmailAndPassword(String email, String password);

    Optional<Doctor> findByEmail(String email);

    List<Doctor> findByOrderByName();

    // custom query
    @Query("FROM Doctor WHERE email LIKE %:pattern")
    List<Doctor> findByEmailContains(String pattern);
}
