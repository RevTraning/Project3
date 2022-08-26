package com.revature.spring_hrms_project2.repositories;

import com.revature.spring_hrms_project2.models.LabResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface LabResultRepo extends JpaRepository<LabResult, Integer> {

    Optional<LabResult> findBylabResultId(int labResId);




    // custom queries
}
