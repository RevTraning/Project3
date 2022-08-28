export class LabResults{
    
    labResultsID: number;
    apptFormID: number;
    
    //This gets sent to the API, needs to be concat'd into an HTTP query
    //We do not need to send anything to populate symptoms table
    language: string;
    symptoms: number[];
    DOB: number;
    Gender: string; //req "male" "female"

    //API returns a bunch, perhaps we can just take some key fields:
    //This assume we just take the most likely issue
    Name: string;
    Accuracy: number;
    Icd: string;      //Medical industry catalog for specific symptoms
    IcdName: string;  //Name translation for you and me
    ProfName: string; //aka "scientific name"
    

    

    //API returns an array of these, "Issue" with object "Specialisation":

    // [
    //   {    
    //     "Issue": {    
    //       "ID": 495,    
    //       "Name": "Bloated belly",    
    //       "Accuracy": 90,    
    //       "Icd": "R14",    
    //       "IcdName": "Flatulence and related conditions",    
    //       "ProfName": "Meteorism",    
    //       "Ranking": 1    
    //     },
    
    //     "Specialisation": [    
    //       {    
    //         "ID": 15,    
    //         "Name": "General practice",    
    //         "SpecialistID": 0    
    //       }    
    //     ]    
    //   },

    //Idea: iterate through Issue[] and take what we need from key fields?
    


  


}

    
    

  