export class Doctor{
    dId: number;
    name: string;
    email: string;
    password: string;
    dateOfBirth: number;
    licenseN: string;
    practice: string;
   

    constructor(email: string ="", password: string ="", name?: string, dateOfBirth?: number, licenseN?: string, practice?: string, dId?: number){
        this.dId = dId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.licenseN = licenseN;
        this.practice = practice;
        
    }

}