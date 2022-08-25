package com.revature.spring_hrms_project2.dto;

import com.revature.spring_hrms_project2.models.Doctor;
import com.revature.spring_hrms_project2.models.Patient;
import lombok.*;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Data
//@RequiredArgsConstructor
//@AllArgsConstructor
@NoArgsConstructor
public class ApptFormDTO {

    private long dateCreated;

    private int pId;

    private long dateAppointment;

    private double patientHeight;
    private double patientWeight;
    private String patientHabits;
    private String patientChiefComplaint;


}
