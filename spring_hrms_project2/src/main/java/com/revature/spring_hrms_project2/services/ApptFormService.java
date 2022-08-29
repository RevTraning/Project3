package com.revature.spring_hrms_project2.services;


import com.revature.spring_hrms_project2.exceptions.UserNotFoundException;
import com.revature.spring_hrms_project2.models.ApptForm;
import com.revature.spring_hrms_project2.repositories.ApptFormRepo;
import com.revature.spring_hrms_project2.repositories.DoctorRepo;
import com.revature.spring_hrms_project2.repositories.PatientRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ApptFormService {

    private Logger log = LoggerFactory.getLogger(this.getClass());
    private ApptFormRepo apptFormRepo;
    private DoctorRepo dr;
    private PatientRepo pr;

    @Autowired
    public ApptFormService(ApptFormRepo apptFormRepo, DoctorRepo dr, PatientRepo pr) {
        super();
        this.apptFormRepo = apptFormRepo;
        this.dr=dr;
        this.pr=pr;
    }

    @Transactional(readOnly = true)
    public Set<ApptForm> getAll() {

        return apptFormRepo.findAll().stream().collect(Collectors.toSet());
    }


    @Transactional(readOnly = true)
    public ApptForm getById(int id) {

        if (id <= 0) {
            log.warn("Id cannot be <= 0. Id passed was: {}", id);
            return null;
        } else {
            return apptFormRepo.findById(id).orElseThrow(() -> new UserNotFoundException("No apptForm found with id " + id));
        }

    }

    @Transactional(readOnly = true)
    public List<ApptForm> getBypid(int pid){
        return apptFormRepo.findBypId(pid).orElseThrow(()-> new UserNotFoundException("No apptForm found with pid"+pid));
    }

    @Transactional(readOnly = true)
    public List<ApptForm> getBydid(int did){
        return apptFormRepo.findBydId(did).orElseThrow(()-> new UserNotFoundException("No apptForm found with did"+did));
    }


    @Transactional(readOnly = true)
    public List<ApptForm>findByDate(long dateMin,long dateMax){
        return apptFormRepo.findByDate(dateMin,dateMax);
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public ApptForm add(ApptForm d){
        if(d.getdId() !=null && d.getpId()!=null){
            pr.save(d.getpId());
            dr.save(d.getdId());
        }

        return apptFormRepo.save(d);
    }

    @Transactional(propagation = Propagation.REQUIRED)
    public ApptForm update(ApptForm d, int formId){

        return apptFormRepo.findById(formId)
                .map(apptForm-> {
                    apptForm.setDoctorAssessment(d.getDoctorAssessment());
                    apptForm.setDoctorExaminationData(d.getDoctorExaminationData());
                    apptForm.setDoctorInitialComments(d.getDoctorInitialComments());
                    apptForm.setDoctorPrescription(d.getDoctorPrescription());
                    apptForm.setDoctorTreatment(d.getDoctorTreatment());
                    return apptFormRepo.save(apptForm);
                })
                .orElseGet(() -> {
                    d.setFormId(formId);
                    return apptFormRepo.save(d);
                });
    }

    @Transactional(propagation = Propagation.REQUIRED)
    public void remove(int id) {
        apptFormRepo.deleteById(id);
    }

}
