package com.revature.spring_hrms_project2.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
    @NoArgsConstructor
    @AllArgsConstructor
    public class Credentials {

        @NotNull
        @NotBlank
        @Length(min=2)
        private String email;

        @NotNull
        @NotBlank
        private String password;
}
