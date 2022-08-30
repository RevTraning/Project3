export class LabResults{
    // labResultsID: number;
    // apptFormID: number;
    // //This gets sent to the API, needs to be concat'd into an HTTP query
    // //We do not need to send anything to populate symptoms table
    // language: string;
    // symptoms: number[];
    // DOB: number;
    // Gender: string; //req "male" "female"
    // //API returns a bunch, perhaps we can just take some key fields:
    // //This assume we just take the most likely issue
    // Name: string;
    // Accuracy: number;
    // Icd: string;      //Medical industry catalog for specific symptoms
    // IcdName: string;  //Name translation for you and me
    // ProfName: string; //aka "scientific name"
    //API returns an array of these, "Issue" with object "Specialisation":
    //Idea: iterate through Issue[] and take what we need from key fields?
        
    //Issue      
    ID: number;    
    Name: string;    
    Accuracy: number;    
    Icd: string;    
    IcdName: string;    
    ProfName: string;    
    Ranking: number;    
       
    //specializtion
          
    sID: number;    
    sName: string;    
    SpecialistID: number;   
          
    constructor(
        ID: number,    
        Name: string,    
        Accuracy: number,    
        Icd: string,    
        IcdName: string,    
        ProfName: string,    
        Ranking: number,
        sID: number,    
        sName: string,    
        SpecialistID: number,   
    )
    {
        this.ID = ID;
        this.Name = Name;
        this.Accuracy = Accuracy;
        this.Icd = Icd;
        this.IcdName = IcdName;
        this.ProfName = ProfName;
        this.Ranking = Ranking;
        this.sID = sID;
        this.sName = sName;
        this.SpecialistID = SpecialistID;
    }

    
    


  


}

    
    

  