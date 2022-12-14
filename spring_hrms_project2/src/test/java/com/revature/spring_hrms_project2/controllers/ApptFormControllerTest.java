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
class ApptFormControllerTest {

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
        this.testForm = new ApptForm(1, 65845165, 1,"somePatient", 1, "someDoc", 651618200, 50.5, 100.5, "formPatHabits", "formPatComplaint", "formDocComments", "formDocExam", "formDocAssess", "formDocTreat", "formDocPresc");
        this.testUpdateForm = new ApptForm(1, 65845165, 1,"somePatient", 1, "someDoc", 651618200, 50.5, 100.5, "formPatHabits", "formPatComplaint", "formDocComments", "formDocExam", "formDocAssess", "formDocTreat", "formDocPresc");
        this.testFormReq = new ApptForm(0, 651618188, 1,"somePat", 1,"someDoc", 651618200, 50.5, 100.5, "formPatHabits", "formPatComplaint", null, null, null, null, null);
        this.testFormTO = new ApptFormDTO(651618188, 1,"somePat", 1,"someDoc", 651618200, 50.5, 100.5, "formPatHabits", "formPatComplaint" );

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

    //<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
    //<><><><><> Tests which are commented out aren't necessary for full batteries <><><><><>
    //<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>


//    @Test
//    void getApptForm() {
//        try {
//            long dateMin = 651618200;
//            long dateMax = 651619000;
//            formCon.getApptForm(dateMin, dateMax);
//        } catch (Exception e)  {
//            assertEquals(UserNotFoundException.class, e.getClass());
//        }
//    }

    @Test
    void addApptFormModelMapper() {

        System.out.println("Controller formAdd test T.O. " + this.formCon.addApptForm(testFormTO));

        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        ApptForm apptForm = modelMapper.map(testFormTO, ApptForm.class);
        ApptForm expected = testFormReq;
        System.out.println("Printing ApptForm: " + apptForm); //Model Mapper Output
        System.out.println("Expected Form: " + testFormReq); //Expected form Output
        assertEquals(expected, apptForm);
    }
    @Test
    void addApptFormFAILURE_DupDate() {

        System.out.println("Controller formAdd test response object: " + this.formCon.addApptForm(testFormTO));
        try {
            this.formCon.addApptForm(testFormTO);
            this.formCon.addApptForm((testFormTO)); //second should produce error
        } catch (Exception e) {
            assertEquals(Exception.class, e.getClass());
        }
    }

//    @Test
//    void findApptFormById() {
//        System.out.println("Testing findById: " + testForm.getFormId());
//        System.out.println(this.formCon.findApptFormById(testForm.getFormId()));
//        given(this.formSer.getById(testForm.getFormId()).willReturn(Optional.of(this.testForm)));
//    }
    @Test
    void findApptFormByIdFAILURE_NotFound() {
        try {
            this.formCon.findApptFormById(-1);
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }

//    @Test
//    void updateApptFormSUCCESS() {
//        try {
//            this.formCon.updateApptForm(testUpdateForm, testForm.getdId());
//        } catch (Exception e)  {
//            assertEquals(UserNotFoundException.class, e.getClass());
//        }
//    }

    @Test
    void updateApptFormFAILURE_ExceptNotFound() {
        try {
            this.formCon.updateApptForm(testUpdateForm, -1);
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }

//    @Test
//    void removeApptFormSUCCESS() {
//        try {
//            this.formCon.removeApptForm(testForm.getdId());
//        } catch (Exception e)  {
//            assertEquals(UserNotFoundException.class, e.getClass());
//        }
//    }
    @Test
    void removeApptFormFAILURE() {
        try {
            this.formCon.removeApptForm(-1);
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }

}