package com.revature.spring_hrms_project2.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


    @Entity
    @Table(name = "labResults")
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "labResultsId")
    public class labResults {

        @Id
        @Column(name = "labResultsId")
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int labResultsId;

        @ManyToOne
        @JoinColumn(name = "formId")
        ApptForm formId;


}
