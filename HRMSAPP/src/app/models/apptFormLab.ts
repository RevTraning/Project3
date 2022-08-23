export class ApptForm{
    
    labResultsID: number;
    apptFormID: number;
    labAPIBody: string; //big changes incoming, depends on API


  constructor(labResultsID: number = 0, labAPIBody: string = "", apptFormID?: number) {
    this.labResultsID = labResultsID;
    this.apptFormID = apptFormID;
    this.labAPIBody = labAPIBody; //Changes after implementing API
  }


}

    
    

  