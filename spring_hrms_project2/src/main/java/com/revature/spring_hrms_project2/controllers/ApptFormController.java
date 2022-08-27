package com.revature.spring_hrms_project2.controllers;

import com.revature.spring_hrms_project2.dto.Credentials;
import com.revature.spring_hrms_project2.dto.ApptFormDTO;
import com.revature.spring_hrms_project2.models.ApptForm;
import com.revature.spring_hrms_project2.services.ApptFormService;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
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
    private ApptFormService as;

    @Autowired

    public ApptFormController(ApptFormService as) {
        this.as = as;
    }


    @GetMapping
    public ResponseEntity<?> getApptForm(@RequestParam(required=false, name = "dateMin") final Long dateMin
                                        ,@RequestParam(required=false, name = "dateMax") final Long dateMax
                                        ,@RequestParam(required=false, name = "pId") final Integer pid
                                        ,@RequestParam(required=false, name = "dId") final Integer did){

        if (dateMin != null && dateMax != null) {

            return ResponseEntity.ok(as.findByDate(dateMin,dateMax));
        } else if (pid != null){
            return ResponseEntity.ok(as.getBypid(pid));
        } else if (did != null){
            return ResponseEntity.ok(as.getBydid(did));
        } else {
            return ResponseEntity.ok(as.getAll());
        }
    }




    @GetMapping("/{id}") // allows the client to send the request http://localhost:5000/api/ApptForms/2
    public ResponseEntity<ApptForm> findApptFormById(@PathVariable("id") int id) {
        return ResponseEntity.ok(as.getById(id));
    }

    @PostMapping("/add") // http://localhost:5000/ApptForms/add
    public ResponseEntity<ApptForm> addApptForm(@Valid @RequestBody ApptFormDTO apptFormDto) {

        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        ApptForm apptForm = modelMapper.map(apptFormDto, ApptForm.class);
        return ResponseEntity.ok(as.add(apptForm));
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
       modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
       return as.update(apptForm, id);

    }

    @DeleteMapping("/{id}")
    public void removeApptForm(@PathVariable("id") int id) {
        as.remove(id);
    }
}
