package com.revature.spring_hrms_project2.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


    @Entity
    @Table(name = "labResult")
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "labResultId")
    public class LabResult {

        @Id
        @Column(name = "labResultsId")
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int labResultId;
        ApptForm formId;
        int pId;
        int dId;

        //Sent to API
        String language;
        int[] symptoms;
        int DOB;
        String gender;

        //Lab Result Issue Info
        String name;
        double accuracy;
        String icd;
        String icdName;
        String profName;





        //Getters/Setters

        public int getLabResultId() {return labResultId;}

        public void setLabResultId(int labResultId) {this.labResultId = labResultId;}

        public ApptForm getFormId() {return formId;}

        public void setFormId(ApptForm formId) {this.formId = formId;}

        public int getpId() {return pId;}

        public void setpId(int pId) {this.pId = pId;}

        public int getdId() {return dId;}

        public void setdId(int dId) {this.dId = dId;}

        public String getLanguage() {return language;}

        public void setLanguage(String language) {this.language = language;}

        public int[] getSymptoms() {return symptoms;}

        public void setSymptoms(int[] symptoms) {this.symptoms = symptoms;}

        public int getDOB() {return DOB;}

        public void setDOB(int DOB) {this.DOB = DOB;}

        public String getGender() {return gender;}

        public void setGender(String gender) {this.gender = gender;}

        public String getName() {return name;}

        public void setName(String name) {this.name = name;}

        public double getAccuracy() {return accuracy;}

        public void setAccuracy(double accuracy) {this.accuracy = accuracy;}

        public String getIcd() {return icd;}

        public void setIcd(String icd) {this.icd = icd;}

        public String getIcdName() {return icdName;}

        public void setIcdName(String icdName) {this.icdName = icdName;}

        public String getProfName() {return profName;}

        public void setProfName(String profName) {this.profName = profName;}
    }
