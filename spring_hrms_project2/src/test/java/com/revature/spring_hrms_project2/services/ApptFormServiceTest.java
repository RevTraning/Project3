package com.revature.spring_hrms_project2.services;
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


@ExtendWith(MockitoExtension.class)
class ApptFormServiceTest {

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