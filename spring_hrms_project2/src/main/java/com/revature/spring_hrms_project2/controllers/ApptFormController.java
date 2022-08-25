package com.revature.spring_hrms_project2.controllers;

import com.revature.spring_hrms_project2.dto.Credentials;
import com.revature.spring_hrms_project2.dto.ApptFormDTO;
import com.revature.spring_hrms_project2.models.ApptForm;
import com.revature.spring_hrms_project2.services.ApptFormService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/apptForm")
public class ApptFormController {

    private static final ModelMapper modelMapper = new ModelMapper();
    private ApptFormService ds;

    @Autowired

    public ApptFormController(ApptFormService ds) {
        this.ds = ds;
    }

/*
    @GetMapping
    public ResponseEntity<?> getApptForm(@RequestParam(value = "email", required=false) final String email) {

        // If there is no query parameter for the email, return all ApptForms
        if (email == null || email.isEmpty()) {
            return ResponseEntity.ok(ds.getAll());
        } else
        {
            //return ResponseEntity.ok(ds.getById());

        }
    }


 */

    @PostMapping("/add") // http://localhost:5000/ApptForms/add
    public ResponseEntity<ApptForm> addApptForm(@Valid @RequestBody ApptFormDTO apptFormDto) {

        ApptForm apptForm = modelMapper.map(apptFormDto, ApptForm.class);
        return ResponseEntity.ok(ds.add(apptForm));
    }

    @GetMapping("/{id}") // allows the client to send the request http://localhost:5000/api/ApptForms/2
    public ResponseEntity<ApptForm> findApptFormById(@PathVariable("id") int id) {
        return ResponseEntity.ok(ds.getById(id));
    }
    /*
        @PutMapping("/{id}")
        public ResponseEntity<ApptForm> updateApptForm(@Valid @RequestBody ApptForm ApptForm) {
          //modelMapper.map(ApptFormDto, ApptForm.class);
            return ResponseEntity.ok(ds.update(ApptForm));
        }
    */
    @PutMapping("/{id}")
    public ApptForm updateApptForm(@RequestBody ApptForm apptForm, @PathVariable int id) {
        return ds.update(apptForm, id);

    }

    @DeleteMapping("/{id}")
    public void removeApptForm(@PathVariable("id") int id) {
        ds.remove(id);
    }
}
