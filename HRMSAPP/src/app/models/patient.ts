export class Patient{
    pId: number;
    name: string;
    email: string;
    password: string;
    dateOfBirth: number;
    ethnicity: string;
    gender: string;
    medications: string;

    constructor(
        email: string ="", 
        password: string ="", 
        name?: string, 
        dateOfBirth?: number, 
        ethnicity?: string, 
        gender?: string, 
        medications?: string, 
        pId?: number
        )
    {
        this.pId = pId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.ethnicity = ethnicity;
        this.gender = gender;
        this.medications = medications;
    }

}