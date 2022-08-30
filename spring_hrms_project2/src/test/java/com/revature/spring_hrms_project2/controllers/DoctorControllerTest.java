package com.revature.spring_hrms_project2.controllers;

import com.revature.spring_hrms_project2.dto.Credentials;
import com.revature.spring_hrms_project2.dto.DoctorDTO;
import com.revature.spring_hrms_project2.exceptions.UserNotFoundException;
import com.revature.spring_hrms_project2.models.Doctor;
import com.revature.spring_hrms_project2.repositories.DoctorRepo;
import com.revature.spring_hrms_project2.services.DoctorService;
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
class DoctorControllerTest {

    @Mock
    DoctorRepo docRep;
    @InjectMocks
    DoctorService docSer = new DoctorService(docRep);
//    @InjectMocks
//    HttpServletResponse hSerLet;
    DoctorController docCon = new DoctorController(docSer);

    Doctor testDoc;
    Doctor testUpdateDoc;
    DoctorDTO testDocTO;
    Credentials testCreds;

    @BeforeEach
    void setUp() throws Exception {
        this.testDoc = new Doctor(1, "docName", "docPassword", "docEmail@mail.org", 120312851, "12345", "docPractice" );
        this.testUpdateDoc = new Doctor(1, "UPDATED_DOC", "docPassword", "docEmail@mail.org", 120312851, "12345", "docPractice" );
        this.testDocTO = new DoctorDTO("docName", "docPassword", "docEmail@mail.org", "12345", "docPractice", 120312851);

    }

    @AfterEach
    void tearDown() throws Exception {
        //Clean up after the doc
        this.testDoc = null;
        this.testUpdateDoc = null;
        this.testCreds = null;
//        this.hSerLet = null;
    }


    @Test
    void loginSUCCESS() {
            this.testCreds = new Credentials("docEmail@mail.org", "docPassword");
            given(this.docRep.findByEmailAndPassword(testCreds.getEmail(), testCreds.getPassword())).willReturn(Optional.of(this.testDoc));

            Doctor expected = this.testDoc;
            Doctor actual = this.docSer.getByCredentials(testCreds);

            assertEquals(expected, actual);

            verify(this.docRep, times(1)).findByEmailAndPassword(testCreds.getEmail(), testCreds.getPassword());
    }

    @Test
    void loginFAILURE() {
        this.testCreds = new Credentials("badEmail", "badPassword");
        given(this.docRep.findByEmailAndPassword(testCreds.getEmail(), testCreds.getPassword())).willReturn(Optional.empty());


        assertNull(this.docSer.getByCredentials(testCreds));

        verify(this.docRep, times(1)).findByEmailAndPassword(testCreds.getEmail(), testCreds.getPassword());
    }

    @Test
    void getDoctor() {
        try {
            this.docCon.getDoctor(testDoc.getEmail());
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }

    @Test
    void addDoctorSUCCESS() {
        try {
            this.docCon.addDoctor(testDocTO);
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }
    @Test
    void addDoctorFAILURE() {
        //Fails due to unique constraint for email in database
        try {
            this.docCon.addDoctor(testDocTO);
            this.docCon.addDoctor(testDocTO);
        } catch (Exception e)  {
            assertEquals(Exception.class, e.getClass());
        }
    }

    @Test
    void findDoctorByIdSUCCESS() {
        try {
            this.docCon.findDoctorById(testDoc.getdId());
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }
    @Test
    void findDoctorByIdFAILURE() {
        try {
            this.docCon.findDoctorById(-1);
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }

    @Test
    void updateDoctorSUCCESS() {
        try {
            this.docCon.updateDoctor(testUpdateDoc, testDoc.getdId());
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }
    @Test
    void updateDoctorFAILURE() {
        try {
            this.docCon.updateDoctor(testUpdateDoc, -1);
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }

    @Test
    void removeDoctorSUCCESS() {
        try {
            this.docCon.removeDoctor(testDoc.getdId());
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }
    @Test
    void removeDoctorFAILURE() {
        try {
            this.docCon.removeDoctor(-1);
        } catch (Exception e)  {
            assertEquals(UserNotFoundException.class, e.getClass());
        }
    }

}