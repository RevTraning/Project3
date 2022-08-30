package com.revature.spring_hrms_project2.services;

import com.revature.spring_hrms_project2.controllers.PatientController;
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
import org.springframework.web.bind.annotation.RequestBody;

import javax.servlet.http.HttpServletResponse;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import java.util.Optional;


@ExtendWith(MockitoExtension.class)
class PatientServiceTest {

    @Mock
    PatientRepo patRep;
    @InjectMocks
    PatientService patSer = new PatientService(patRep);
    PatientController patCon = new PatientController(patSer);

    Patient testPat;
    Patient testUpdatePat;
    PatientDTO testPatTO;
    Credentials testCreds;

    @BeforeEach
    void setUp() throws Exception {
        this.testPat = new Patient(1, "patName", "patEmail@mail.org", "patPassword", 15111551, "patGender", "patEthnicity", "patMedications");
        this.testUpdatePat = new Patient(1, "UPDATEPAT", "patEmail@mail.org", "patPassword", 15111551, "patGender", "patEthnicity", "patMedications");
        this.testPatTO = new PatientDTO("patName", "patPassword", "patEmail@mail.org", "patEthnicity", "patGender", "patMedications", 15111551);

    }

    @AfterEach
    void tearDown() throws Exception {
        this.testPat = null;
        this.testUpdatePat = null;
        this.testCreds = null;
    }

    @Test
    void getByCredentials() {
        this.testCreds = new Credentials(testPat.getEmail(), testPat.getPassword());
        given(this.patRep.findByEmailAndPassword(testCreds.getEmail(), testCreds.getPassword())).willReturn(Optional.of(this.testPat));

        Patient expected = this.testPat;
        Patient actual = this.patSer.getByCredentials(testCreds);

        assertEquals(expected, actual);

        verify(this.patRep, times(1)).findByEmailAndPassword(testCreds.getEmail(), testCreds.getPassword());
    }

    @Test
    void getByCredentialsFAIL_BadCreds() {
        this.testCreds = new Credentials("Nope.avi", "reusedPassword");
        given(this.patRep.findByEmailAndPassword(testCreds.getEmail(), testCreds.getPassword())).willReturn(Optional.empty());

        assertNull(this.patSer.getByCredentials(testCreds));


        //verify(this.patRep, times(1)).findByEmailAndPassword(testCreds.getEmail(), testCreds.getPassword());
    }

    @Test
    void getAll() {
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

    @Test
    void getById() {
    }

    @Test
    void getByEmail() {
    }
}