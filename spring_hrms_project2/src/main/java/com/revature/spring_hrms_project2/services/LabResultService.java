package com.revature.spring_hrms_project2.services;

import com.revature.spring_hrms_project2.exceptions.UserNotFoundException;
import com.revature.spring_hrms_project2.models.LabResult;
import com.revature.spring_hrms_project2.repositories.LabResultRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class LabResultService {

    private Logger log = LoggerFactory.getLogger(this.getClass());
    private LabResultRepo labResultRepo;

    @Autowired
    public LabResultService(LabResultRepo labResultRepo) {
        super();
        this.labResultRepo = labResultRepo;
    }

    @Transactional(readOnly = true)
    public Set<LabResult> getAll() {

        return labResultRepo.findAll().stream().collect(Collectors.toSet());
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public LabResult add(LabResult lres){
        return labResultRepo.save(lres);
    }

    @Transactional(propagation = Propagation.REQUIRED)
    public LabResult update(LabResult lres, int id){

        return labResultRepo.findById(id)
                .map(labResult-> {
                    labResult.setLabResultId(lres.getLabResultId());
                    labResult.setpId(lres.getpId());
                    labResult.setdId(lres.getdId());
                    labResult.setFormId(lres.getFormId());
                    return labResultRepo.save(labResult);
                })
                .orElseGet(() -> {
                    lres.setLabResultId(id);
                    return labResultRepo.save(lres);
                });
    }

    @Transactional(propagation = Propagation.REQUIRED)
    public void remove(int id) {
        labResultRepo.deleteById(id);
    }


    @Transactional(readOnly = true)
    public LabResult getById(int id) {

        if (id <= 0) {
            log.warn("Id cannot be <= 0. Id passed was: {}", id);
            return null;
        } else {
            return labResultRepo.findById(id).orElseThrow(() -> new UserNotFoundException("No labResult found with id " + id));
        }
    }
}
