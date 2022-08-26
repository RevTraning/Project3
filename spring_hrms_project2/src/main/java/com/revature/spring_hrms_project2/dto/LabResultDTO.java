package com.revature.spring_hrms_project2.dto;

import lombok.*;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
@RequiredArgsConstructor
@AllArgsConstructor

public class LabResultDTO {

    //Not sure exactly what needs to be included here, dId was not present in DoctorDTO
    //private @NonNull int labResultsId;
    private int formId;
    private int pId;
    private int dId;


}
