export class ApptForm{
    formID: number;
    dateCreated: number;
    patientID: number;
    docID: number;

    patientName: string;
    patientAge: number;
    patientEthnicity: string;
    patientMedications: string;

    dateAppointment: number;
    patientHeight: number;
    patientWeight: number;
    patientHabits: number;
    patientChiefComplaint: string;

    doctorInitialComments: string;
    doctorExaminationData: string;
    labExaminationResults: string; //big changes incoming, depends on API

    doctorAssessment: string;
    doctorTreatment: string;
    doctorPrescription: string;
    

  constructor(
    dateCreated: number = 0, 
    patientID: number = 0, 
    docID: number = 0, 
    patientName: string = "", 
    patientAge: number = 0, 
    patientEthnicity: string = "", 
    patientMedications: string = "", 
    
    dateAppointment: number = 0, 
    patientHeight: number = 0, 
    patientWeight: number = 0, 
    patientHabits: number = 0, 
    patientChiefComplaint: string = "", 

    formID?: number,

    doctorInitialComments?: string, 
    doctorExaminationData?: string, 
    labExaminationResults?: string, //get from JSON from lab API
    doctorAssessment?: string, 
    doctorTreatment?: string, 
    doctorPrescription?: string,
) {
    this.formID = formID;
    this.dateCreated = dateCreated;
    this.patientID = patientID;
    this.docID = docID;
    this.patientName = patientName;
    this.patientAge = patientAge;
    this.patientEthnicity = patientEthnicity;
    this.patientMedications = patientMedications;
    this.dateAppointment = dateAppointment;
    this.patientHeight = patientHeight;
    this.patientWeight = patientWeight;
    this.patientHabits = patientHabits;
    this.patientChiefComplaint = patientChiefComplaint;
    this.doctorInitialComments = doctorInitialComments;
    this.doctorExaminationData = doctorExaminationData;
    this.labExaminationResults = labExaminationResults;
    this.doctorAssessment = doctorAssessment;
    this.doctorTreatment = doctorTreatment;
    this.doctorPrescription = doctorPrescription;
  }    
}