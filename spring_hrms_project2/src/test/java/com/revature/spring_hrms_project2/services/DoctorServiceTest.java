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
class DoctorServiceTest {

    @Mock
    DoctorRepo docRep;
    @InjectMocks
    DoctorService docSer = new DoctorService(docRep);
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
        this.testDoc = null;
        this.testUpdateDoc = null;
        this.testCreds = null;
    }

    //<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
    //<><><><><> Tests which are commented out aren't necessary for full batteries <><><><><>
    //<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>




    @Test
    void getByID_SUCCESS() {
        int id = 1;
        given(this.docRep.findById(id)).willReturn(Optional.of(this.testDoc));

        Doctor expected = this.testDoc;
        Doctor actual = this.docSer.getById(id);

        assertEquals(actual, expected);
    }
    @Test
    void getByCreds() {

    }



}