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

    private Patient pId;
    private Doctor dId;

    private long dateAppointment;

    private double patientHeight;
    private double patientWeight;
    private String patientHabits;
    private String patientChiefComplaint;

    //getters and setters


    public long getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(long dateCreated) {
        this.dateCreated = dateCreated;
    }

    public Patient getpId() {
        return pId;
    }

    public void setpId(Patient pId) {
        this.pId = pId;
    }

    public Doctor getdId() {
        return dId;
    }

    public void setdId(Doctor dId) {
        this.dId = dId;
    }

    public long getDateAppointment() {
        return dateAppointment;
    }

    public void setDateAppointment(long dateAppointment) {
        this.dateAppointment = dateAppointment;
    }

    public double getPatientHeight() {
        return patientHeight;
    }

    public void setPatientHeight(double patientHeight) {
        this.patientHeight = patientHeight;
    }

    public double getPatientWeight() {
        return patientWeight;
    }

    public void setPatientWeight(double patientWeight) {
        this.patientWeight = patientWeight;
    }

    public String getPatientHabits() {
        return patientHabits;
    }

    public void setPatientHabits(String patientHabits) {
        this.patientHabits = patientHabits;
    }

    public String getPatientChiefComplaint() {
        return patientChiefComplaint;
    }

    public void setPatientChiefComplaint(String patientChiefComplaint) {
        this.patientChiefComplaint = patientChiefComplaint;
    }
}
