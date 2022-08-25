package com.revature.spring_hrms_project2.dto;

import lombok.*;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
@RequiredArgsConstructor
@AllArgsConstructor
@NoArgsConstructor
public class DoctorDTO {

    @Length(min = 2)
    private @NonNull String name;

    @NotBlank
    private @NonNull String password;
    @Email
    private @NonNull String email;
    @Length(min = 2)
    private String licenseN;
    @Length(min = 2)
    private String practice;
    private long dateOfBirth;
}
