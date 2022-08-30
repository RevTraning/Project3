//<><> 14 fields
export class ApptForm{

    formID: number;
    dateCreated: number;
    patientID: number;
    patientName: string;
    docID: number;
    docName: string;

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
    patientName: string = "", 
    docID: number = 0, 
    docName: string = "",
    
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
    this.patientName = patientName;
    this.docID = docID;
    this.docName = docName;

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