export class Patient{
    pId: number;
    name: string;
    email: string;
    password: string;
    dateOfBirth: number;
    ethnicity: string;
    patientSex: string;
    medications: string;
    dId: number;

    constructor(email: string ="", password: string ="", name?: string, dateOfBirth?: number, ethnicity?: string, patientSex?: string, medications?: string, dId?: number, pId?: number){
        this.pId = pId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.ethnicity = ethnicity;
        this.patientSex = patientSex;
        this.medications = medications;
        this.dId  = dId;
    }

}