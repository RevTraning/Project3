export class LabResults{
    
    
    

    

    

    
      
    //     "Issue"

    ID: number;    
    Name: string;    
    Accuracy: number;    
    Icd: string;    
    IcdName: string;    
    ProfName: string;    
    Ranking: number;    
  
    
    //     "Specialisation": [    
     
    sID: number;    
    sName: string;    
    SpecialistID: number;   

    constructor(ID: number,    
        Name: string,    
        Accuracy: number,    
        Icd: string,    
        IcdName: string,    
        ProfName: string,    
        Ranking: number,    
        sID: number,    
        sName: string,    
        SpecialistID: number   
    ){
        this.ID=   ID; 
        this.Name=  Name;  
        this.Accuracy= Accuracy;   
        this.Icd=   Icd; 
        this.IcdName=    IcdName;
        this.ProfName=  ProfName;  
        this.Ranking= Ranking ;  
        this.sID= sID;   
        this.sName=  sName;  
        this.SpecialistID  = SpecialistID;

    }


  


}

    
    

  