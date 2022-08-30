package com.revature.spring_hrms_project2.controllers;

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
import org.springframework.web.bind.annotation.RequestBody;

import javax.servlet.http.HttpServletResponse;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import java.util.Optional;

/**
 * This is a Test Suite - a grouping of unit tests for the methods
 * within one class.
 *
 * The @ExtendWith annotation is used to load a JUnit 5 extension.
 * JUnit defines an extension API, which allows a third-party vendor
 * like Mockito to hook into the life cycle of running test classes and
 * add additional functionality.
 */
@ExtendWith(MockitoExtension.class)
class ApptFormControllerTest {

    @Mock
    ApptFormRepo formRep;
    @InjectMocks
    ApptFormService formSer = new ApptFormService(formRep);
//    @InjectMocks
//    HttpServletResponse hSerLet;
    ApptFormController formCon = new ApptFormController(formSer);

    ApptForm testForm;
    Patient testPat;
    Doctor testDoc;
    ApptForm testUpdateForm;
    ApptFormDTO testFormTO;
    Credentials testCreds;

    @BeforeEach
    void setUp() throws Exception {
        this.testForm = new ApptForm(1, 65845165, 1, 1, 651618200, 50.5, 100.5, "formPatHabits", "formPatComplaint", "formDocComments", "formDocExam", "formDocAssess", "formDocTreat", "formDocPresc");
        this.testUpdateForm = new ApptForm(1, 65845165, 1, 1, 651618200, 50.5, 100.5, "formPatHabits", "formPatComplaint", "formDocComments", "formDocExam", "formDocAssess", "formDocTreat", "formDocPresc" );
        this.testFormTO = new ApptFormDTO(651618188, 1, 1, 651618200, 50.5, 100.5, "formPatHabits", "formPatComplaint" );
        this.testPat = new Patient(1, "patName", "patEmail@mail.org", "patPassword", 15111551, "patGender", "patEthnicity", "patMedications");
        this.testDoc = new Doctor(1, "docName", "docPassword", "docEmail@mail.org", 120312851, "12345", "docPractice" );
    }

    @AfterEach
    void tearDown() throws Exception {
        //Clean up after the form
        this.testForm = null;
        this.testUpdateForm = null;
        this.testCreds = null;
//        this.hSerLet = null;
    }




    @Test
    void getApptForm() {
        try {


        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }

    @Test
    void addApptFormSUCCESS() {
        try {
            this.formCon.addApptForm(testFormTO);
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }
    @Test
    void addApptFormFAILURE() {
        //Fails due to unique constraint for Appointment Date in database
        try {
            this.formCon.addApptForm(testFormTO);
            this.formCon.addApptForm(testFormTO);
        } catch (Exception e)  {
            assertEquals(Exception.class, e.getClass());
        }
    }

    @Test
    void findApptFormByIdSUCCESS() {
        try {
            this.formCon.findApptFormById(testForm.getdId());
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }
    @Test
    void findApptFormByIdFAILURE() {
        try {
            this.formCon.findApptFormById(-1);
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }

    @Test
    void updateApptFormSUCCESS() {
        try {
            this.formCon.updateApptForm(testUpdateForm, testForm.getdId());
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }
    @Test
    void updateApptFormFAILURE() {
        try {
            this.formCon.updateApptForm(testUpdateForm, -1);
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }

    @Test
    void removeApptFormSUCCESS() {
        try {
            this.formCon.removeApptForm(testForm.getdId());
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }
    @Test
    void removeApptFormFAILURE() {
        try {
            this.formCon.removeApptForm(-1);
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }

}