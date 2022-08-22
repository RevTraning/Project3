export class Patient{
    pId: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    hId: number;

    constructor(email: string ="", password: string ="", firstName?: string, lastName?: string, hId?: number, pId?: number){
        this.pId = pId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.hId  = hId;
    }

}