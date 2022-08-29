package com.revature.spring_hrms_project2.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;

@Entity
    @Table(name = "apptForm")
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "formId")
    public class ApptForm {

        @Id
        @Column(name = "formId")
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int formId;

        private long dateCreated;
       // @OneToMany(mappedBy="pId", fetch=FetchType.LAZY)
        @ManyToOne(cascade = CascadeType.ALL, fetch=FetchType.LAZY )
        @JoinColumn(name = "pId")
        private Patient pId;
       @ManyToOne(cascade = CascadeType.ALL, fetch=FetchType.LAZY)
        @JoinColumn(name = "dId")
        private Doctor dId;




/*
        private Patient patientName;
        private Patient patientDateOfBirth;
        private Patient patientEthnicity;
        private Patient patientGender;
        private Patient patientMedications;
*/

        @Column(unique = true)
        private long dateAppointment;

        private double patientHeight;

        private double patientWeight;
        @Length(min = 2)
        private String patientHabits;
        @Length(min = 2)
        private String patientChiefComplaint;


        @Length(min = 2)
        private String doctorInitialComments;
        @Length(min = 2)
        private String doctorExaminationData;


        @Length(min = 2)
        private String doctorAssessment;


        @Length(min = 2)
        private String doctorTreatment;
        @Length(min = 2)
        private String doctorPrescription;


    public int getFormId() {
        return formId;
    }

    public void setFormId(int formId) {
        this.formId = formId;
    }

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

    public String getDoctorInitialComments() {
        return doctorInitialComments;
    }

    public void setDoctorInitialComments(String doctorInitialComments) {
        this.doctorInitialComments = doctorInitialComments;
    }

    public String getDoctorExaminationData() {
        return doctorExaminationData;
    }

    public void setDoctorExaminationData(String doctorExaminationData) {
        this.doctorExaminationData = doctorExaminationData;
    }

    public String getDoctorAssessment() {
        return doctorAssessment;
    }

    public void setDoctorAssessment(String doctorAssessment) {
        this.doctorAssessment = doctorAssessment;
    }

    public String getDoctorTreatment() {
        return doctorTreatment;
    }

    public void setDoctorTreatment(String doctorTreatment) {
        this.doctorTreatment = doctorTreatment;
    }

    public String getDoctorPrescription() {
        return doctorPrescription;
    }

    public void setDoctorPrescription(String doctorPrescription) {
        this.doctorPrescription = doctorPrescription;
    }

}
