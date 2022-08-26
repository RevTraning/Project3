package com.revature.spring_hrms_project2.controllers;

import com.revature.spring_hrms_project2.dto.Credentials;
import com.revature.spring_hrms_project2.dto.LabResultDTO;
import com.revature.spring_hrms_project2.models.LabResult;
import com.revature.spring_hrms_project2.services.LabResultService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/labResult")
public class LabResultController {
    private static final ModelMapper modelMapper = new ModelMapper();
    private LabResultService labResSer;

    @Autowired
    public LabResultController(LabResultService labResSer) {
        this.labResSer = labResSer;
    }


    @GetMapping
    public ResponseEntity<?> getAllLabResult() {
            return ResponseEntity.ok(labResSer.getAll());
    }

    @PostMapping("/add") // http://localhost:5000/LabResults/add
    public ResponseEntity<LabResult> addLabResult(@Valid @RequestBody LabResultDTO labResultDto) {
        LabResult labResult = modelMapper.map(labResultDto, LabResult.class);
        return ResponseEntity.ok(labResSer.add(labResult));
    }

    @GetMapping("/{id}") // allows the client to send the request http://localhost:5000/api/LabResults/2
    public ResponseEntity<LabResult> findLabResultById(@PathVariable("id") int id) {
        return ResponseEntity.ok(labResSer.getById(id));
    }

    @PutMapping("/{id}")
    public LabResult updateLabResult(@RequestBody LabResult labResult, @PathVariable int id) {
        return labResSer.update(labResult, id);
    }

    @DeleteMapping("/{id}")
    public void removeLabResult(@PathVariable("id") int id) {
        labResSer.remove(id);
    }
}
