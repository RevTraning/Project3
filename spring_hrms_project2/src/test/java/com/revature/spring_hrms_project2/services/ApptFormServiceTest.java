package com.revature.spring_hrms_project2.services;

import com.revature.spring_hrms_project2.controllers.ApptFormController;
import com.revature.spring_hrms_project2.dto.Credentials;
import com.revature.spring_hrms_project2.dto.ApptFormDTO;
import com.revature.spring_hrms_project2.exceptions.UserNotFoundException;
import com.revature.spring_hrms_project2.models.ApptForm;
import com.revature.spring_hrms_project2.models.Doctor;
import com.revature.spring_hrms_project2.models.Patient;
import com.revature.spring_hrms_project2.repositories.ApptFormRepo;
import com.revature.spring_hrms_project2.services.ApptFormService;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.modelmapper.ModelMapper;


import javax.servlet.http.HttpServletResponse;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import java.util.Optional;


@ExtendWith(MockitoExtension.class)
class ApptFormServiceTest {

    @Mock
    ApptFormRepo formRep;
    @InjectMocks
    ApptFormService formSer = new ApptFormService(formRep);
    ApptFormController formCon = new ApptFormController(formSer);
    private static final ModelMapper modelMapper = new ModelMapper();

    ApptForm testForm;
    Patient testPat;
    Doctor testDoc;
    ApptForm testUpdateForm;
    ApptForm testFormReq;
    ApptFormDTO testFormTO;

    @BeforeEach
    void setUp() throws Exception {
        this.testPat = new Patient(1, "patName", "patEmail@mail.org", "patPassword", 15111551, "patGender", "patEthnicity", "patMedications");
        this.testDoc = new Doctor(1, "docName", "docPassword", "docEmail@mail.org", 120312851, "12345", "docPractice" );
        this.testForm = new ApptForm(1, 65845165, 1, 1, 651618200, 50.5, 100.5, "formPatHabits", "formPatComplaint", "formDocComments", "formDocExam", "formDocAssess", "formDocTreat", "formDocPresc");
        this.testUpdateForm = new ApptForm(1, 65845165, 1, 1, 651618200, 50.5, 100.5, "formPatHabits", "formPatComplaint", "formDocComments", "formDocExam", "formDocAssess", "formDocTreat", "formDocPresc" );
        this.testFormReq = new ApptForm(0, 651618188, 1, 1, 651618200, 50.5, 100.5, "formPatHabits", "formPatComplaint", null, null, null, null, null);
        this.testFormTO = new ApptFormDTO(651618188, 1, 1, 651618200, 50.5, 100.5, "formPatHabits", "formPatComplaint" );

    }

    @AfterEach
    void tearDown() throws Exception {
        this.testForm = null;
        this.testUpdateForm = null;
        this.testFormReq = null;
        this.testFormTO = null;
        this.testPat = null;
        this.testDoc = null;
    }

    @Test
    void getAll() {
    }

    @Test
    void getById() {
    }

    @Test
    void getBypid() {
    }

    @Test
    void getBydid() {
    }

    @Test
    void findByDate() {

    }

    @Test
    void add() {

    }

    @Test
    void update() {
    }

    @Test
    void remove() {
    }
}