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

        @ManyToOne(cascade=CascadeType.ALL, fetch=FetchType.LAZY)
        @JoinColumn(name = "formId")
        ApptForm formId;

        @ManyToOne(cascade=CascadeType.ALL, fetch=FetchType.LAZY)
        @JoinColumn(name = "patId")
        Patient pId;

        @ManyToOne(cascade=CascadeType.ALL, fetch=FetchType.LAZY)
        @JoinColumn(name = "docId")
        Doctor dId;

        //When we get to incorporating the API

        //Getters/Setters


        public int getLabResultId() {
            return labResultId;
        }

        public void setLabResultId(int labResultsId) {
            this.labResultId = labResultsId;
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
