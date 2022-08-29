package com.revature.spring_hrms_project2.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.UniqueElements;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.ArrayList;
import java.util.List;

@Entity
    @Table(name = "doctor")
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "dId")
    public class Doctor {

        @Id
//        @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "incrementby")
//        @SequenceGenerator(name="incrementby", sequenceName="incrementby")
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int dId;

        @Length(min = 2)
        private String name;

        @NotBlank
        private String password;

        @Email
        @Column(unique=true)
        private String email;


        private long dateOfBirth;

        @Length(min = 2)
        private String licenseN;

        @Length(min = 2)
        private String practice;

        @OneToMany(mappedBy = "dId")
        private List<ApptForm> apptFormList= new ArrayList<>();

        //Constructor

//    public Doctor(int dId, String name, String password, String email, long dateOfBirth, String licenseN, String practice) {
//        this.dId = dId + 100;
//        this.name = name;
//        this.password = password;
//        this.email = email;
//        this.dateOfBirth = dateOfBirth;
//        this.licenseN = licenseN;
//        this.practice = practice;
//    }
//getters and setters

        public int getdId() {
            return dId;
        }

        public void setdId(int dId) {
            this.dId = dId;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public long getDateOfBirth() {
            return dateOfBirth;
        }

        public void setDateOfBirth(long dateOfBirth) {
            this.dateOfBirth = dateOfBirth;
        }

        public String getLicenseN() {
            return licenseN;
        }

        public void setLicenseN(String licenseN) {
            this.licenseN = licenseN;
        }

        public String getPractice() {
            return practice;
        }

        public void setPractice(String practice) {
            this.practice = practice;
        }
    }
