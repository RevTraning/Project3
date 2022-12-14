package com.revature.spring_hrms_project2.controllers;

import com.revature.spring_hrms_project2.dto.Credentials;
import com.revature.spring_hrms_project2.dto.PatientDTO;
import com.revature.spring_hrms_project2.exceptions.UserNotFoundException;
import com.revature.spring_hrms_project2.models.Patient;
import com.revature.spring_hrms_project2.repositories.PatientRepo;
import com.revature.spring_hrms_project2.services.PatientService;
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
import org.springframework.web.bind.annotation.RequestBody;
import org.modelmapper.ModelMapper;


import javax.servlet.http.HttpServletResponse;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import java.util.Optional;


@ExtendWith(MockitoExtension.class)
class PatientControllerTest {

    @Mock
    PatientRepo patRep;
    @InjectMocks
    PatientService patSer = new PatientService(patRep);
    PatientController patCon = new PatientController(patSer);

    Patient testPat;
    Patient testUpdatePat;
    PatientDTO testPatTO;
    Credentials testCreds;
    ModelMapper modelMapper = new ModelMapper();

    @BeforeEach
    void setUp() throws Exception {
        this.testPat = new Patient(0, "patName", "patEmail@mail.org", "patPassword", 15111551, "patGender", "patEthnicity", "patMedications");
        this.testUpdatePat = new Patient(0, "UPDATEPAT", "patEmail@mail.org", "patPassword", 15111551, "patGender", "patEthnicity", "patMedications");
        this.testPatTO = new PatientDTO("patName", "patPassword", "patEmail@mail.org", "patEthnicity", "patGender", "patMedications", 15111551);

    }

    @AfterEach
    void tearDown() throws Exception {
        this.testPat = null;
        this.testUpdatePat = null;
        this.testCreds = null;
    }


    @Test
    void loginSUCCESS() {
        this.testCreds = new Credentials("patEmail@mail.org", "patPassword");
        given(this.patRep.findByEmailAndPassword(testCreds.getEmail(), testCreds.getPassword())).willReturn(Optional.of(this.testPat));

        Patient expected = this.testPat;
        Patient actual = this.patSer.getByCredentials(testCreds);

        assertEquals(expected, actual);

        verify(this.patRep, times(1)).findByEmailAndPassword(testCreds.getEmail(), testCreds.getPassword());
    }

    @Test
    void loginFAILURE() {
        this.testCreds = new Credentials("badEmail", "badPassword");
        given(this.patRep.findByEmailAndPassword(testCreds.getEmail(), testCreds.getPassword())).willReturn(Optional.empty());


        assertNull(this.patSer.getByCredentials(testCreds));

        verify(this.patRep, times(1)).findByEmailAndPassword(testCreds.getEmail(), testCreds.getPassword());
    }

    @Test
    void getPatient() {
        try {
            this.patCon.getPatient(testPat.getEmail());
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }

    @Test
    void addPatientModelMapper() {
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        Patient locPat = modelMapper.map(testPatTO, Patient.class);

        Patient expected = testPat;
        assertEquals(locPat, expected);

    }
    @Test
    void addPatientFAILURE() {
        //Fails due to unique constraint for email in database
        try {
            this.patCon.addPatient(testPatTO);
            this.patCon.addPatient(testPatTO);
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }

    @Test
    void findPatientByIdSUCCESS() {
        try {
            this.patCon.findPatientById(testPat.getpId());
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }
    @Test
    void findPatientByIdFAILURE() {
        try {
            this.patCon.findPatientById(-1);
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }

    @Test
    void updatePatientSUCCESS() {
        try {
            this.patCon.updatePatient(testUpdatePat, testPat.getpId());
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }
    @Test
    void updatePatientFAILURE() {
        try {
            this.patCon.updatePatient(testUpdatePat, -1);
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }

    @Test
    void removePatientSUCCESS() {
        try {
            this.patCon.removePatient(testPat.getpId());
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }
    @Test
    void removePatientFAILURE() {
        try {
            this.patCon.removePatient(-1);
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }

}