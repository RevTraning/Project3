package com.revature.spring_hrms_project2.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


    @Entity
    @Table(name = "LabResult")
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "labResultsId")
    public class LabResult {

        @Id
        @Column(name = "labResultsId")
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int labResultsId;

        @ManyToOne
        @JoinColumn(name = "formId")
        ApptForm formId;

        @ManyToOne
        @JoinColumn(name = "patId")
        Patient pId;

        @ManyToOne
        @JoinColumn(name = "docId")
        Doctor dId;

        //When we get to incorporating the API

        //Getters/Setters


        public int getLabResultsId() {
            return labResultsId;
        }

        public void setLabResultsId(int labResultsId) {
            this.labResultsId = labResultsId;
        }

        public ApptForm getFormId() {
            return formId;
        }

        public void setFormId(ApptForm formId) {
            this.formId = formId;
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
    }
