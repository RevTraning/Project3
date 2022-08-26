package com.revature.spring_hrms_project2.repositories;

import com.revature.spring_hrms_project2.models.ApptForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ApptFormRepo extends JpaRepository<ApptForm,Integer> {

    Optional<List<ApptForm>> findBydId(int dId);

    Optional <List<ApptForm>> findBypId(int pId);


    //List<ApptForm> findBy();

    @Query("FROM ApptForm WHERE dateAppointment BETWEEN :dateMin AND :dateMax")
    List<ApptForm> findByDate(@Param("dateMin")long dateMin, @Param("dateMax")long dateMax);

}
