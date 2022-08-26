//<><> 14 fields
export class ApptForm{

    formID: number;
    dateCreated: number;
    patientID: number;
    docID: number;

    dateAppointment: number;
    patientHeight: number;
    patientWeight: number;
    patientHabits: string;
    patientChiefComplaint: string;

    doctorInitialComments: string;
    doctorExaminationData: string;
    doctorAssessment: string;
    doctorTreatment: string;
    doctorPrescription: string;
    

  constructor(
    dateCreated: number = 0, 
    patientID: number = 0, 
    docID: number = 0, 
    
    dateAppointment: number = 0, 
    patientHeight: number = 0, 
    patientWeight: number = 0, 
    patientHabits: string = "", 
    patientChiefComplaint: string = "", 

    formID?: number,

    doctorInitialComments?: string, 
    doctorExaminationData?: string, 
    doctorAssessment?: string, 
    doctorTreatment?: string, 
    doctorPrescription?: string,
) {
    this.formID = formID;
    this.dateCreated = dateCreated;
    this.patientID = patientID;
    this.docID = docID;

    this.dateAppointment = dateAppointment;
    this.patientHeight = patientHeight;
    this.patientWeight = patientWeight;
    this.patientHabits = patientHabits;
    this.patientChiefComplaint = patientChiefComplaint;

    this.doctorInitialComments = doctorInitialComments;
    this.doctorExaminationData = doctorExaminationData;
    this.doctorAssessment = doctorAssessment;
    this.doctorTreatment = doctorTreatment;
    this.doctorPrescription = doctorPrescription;
  }    
}