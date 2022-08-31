import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';
import { LabResults } from 'src/app/models/labResults';
import { SymptomCheckerAPIService } from 'src/app/services/symptom-checker-api.service';

interface symtom {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-lab-form',
  templateUrl: './lab-form.component.html',
  styleUrls: ['./lab-form.component.css']
})
export class LabFormComponent implements OnInit {

  symtoms = this._formBuilder.group({
    abdominalPain: false,
    anxiety: false,
    backPain: false,
    burningEyes: false,
    burningInTheThroat: false,
    cheekSwelling: false,
    chestPain: false,
    chestTightness: false,
    chills: false,
    coldSweats: false,
    cough: false,
    dizziness: false,
    droopingEyelid: false,
    dryEyes: false,
    earache: false,
    earlySatiety: false,
    eyePain: false,
    eyeRedness: false,
    fastDeepenedBreathing: false,
    feelingOfForeignBodyInTheEye: false,
    fever: false,
    goingBlackBeforeTheEyes: false,
    headache: false,
    heartburn: false,
    hiccups: false,
    hotFlushes: false,
    increasedThirst: false,
    itchingEyes: false,
    itchingInTheNose: false,
    lipSwelling: false,
    memoryGap: false,
    menstruationDisorder: false,
    missedPeriod: false,
    nausea: false,
    neckPain: false,
    nervousness: false,
    nightCough: false,
    painInTheLimbs: false,
    painOnSwallowing: false,
    palpitations: false,
    paralysis: false,
    reducedAppetite: false,
    runnyNose: false,
    shortnessOfBreath: false,
    skinRash: false,
    sleeplessness: false,
    sneezing: false,
    soreThroat: false,
    sputum: false,
    stomachBurning: false,
    stuffyNose: false,
    sweating: false,
    swollenGlandsInTheArmpits: false,
    swollenGlandsOnTheNeck: false,
    tears: false,
    tiredness: false,
    tremorAtRest: false,
    unconsciousnessShort: false,
    vomiting: false,
    vomitingBlood: false,
    weakness: false,
    weightGain: false,
    wheezing: false,
  });

  symArr: number[] = [];
  onChange(sym: number){
    switch (sym) {
        case 1: this.symArr.push(10);
          break;
        case 2: this.symArr.push(238);
          break;
        case 3: this.symArr.push(104);
          break;
        case 4: this.symArr.push(75);
          break;
        case 5: this.symArr.push(46);
          break;
        case 6: this.symArr.push(170);
          break;
        case 7: this.symArr.push(17);
          break;
        case 8: this.symArr.push(31);
          break;
        case 9: this.symArr.push(175);
          break;
        case 10: this.symArr.push(139);
          break;
        case 11: this.symArr.push(15);
          break;
        case 12: this.symArr.push(207);
          break;
        case 13: this.symArr.push(244);
          break;
        case 14: this.symArr.push(273);
          break;
        case 15: this.symArr.push(87);
          break;
        case 16: this.symArr.push(92);
          break;
        case 17: this.symArr.push(287);
          break;
        case 18: this.symArr.push(33);
          break;
        case 19: this.symArr.push(153);
          break;
        case 20: this.symArr.push(76);
          break;
        case 21: this.symArr.push(11);
          break;
        case 22: this.symArr.push(57);
          break;
        case 23: this.symArr.push(9);
          break;
        case 24: this.symArr.push(45);
          break;
        case 25: this.symArr.push(122);
          break;
        case 26: this.symArr.push(149);
          break;
        case 27: this.symArr.push(40);
          break;
        case 28: this.symArr.push(73);
          break;
        case 29: this.symArr.push(96);
          break;
        case 30: this.symArr.push(35);
          break;
        case 31: this.symArr.push(235);
          break;
        case 32: this.symArr.push(112);
          break;
        case 33: this.symArr.push(123);
          break;
        case 34: this.symArr.push(44);
          break;
        case 35: this.symArr.push(136);
          break;
        case 36: this.symArr.push(114);
          break;
        case 37: this.symArr.push(133);
          break;
        case 38: this.symArr.push(12);
          break;
        case 39: this.symArr.push(203);
          break;
        case 40: this.symArr.push(37);
          break;
        case 41: this.symArr.push(140);
          break;
        case 42: this.symArr.push(54);
          break;
        case 43: this.symArr.push(14);
          break;
        case 44: this.symArr.push(29);
          break;
        case 45: this.symArr.push(124);
          break;
        case 46: this.symArr.push(52);
          break;
        case 47: this.symArr.push(95);
          break;
        case 48: this.symArr.push(13);
          break;
        case 49: this.symArr.push(64);
          break;
        case 50: this.symArr.push(179);
          break;
        case 51: this.symArr.push(28);
          break;
        case 52: this.symArr.push(138);
          break;
        case 53: this.symArr.push(248);
          break;
        case 54: this.symArr.push(169);
          break;
        case 55: this.symArr.push(211);
          break;
        case 56: this.symArr.push(16);
          break;
        case 57: this.symArr.push(115);
          break;
        case 58: this.symArr.push(144);
          break;
        case 59: this.symArr.push(101);
          break;
        case 60: this.symArr.push(181);
          break;
        case 61: this.symArr.push(56);
          break;
        case 62: this.symArr.push(23);
          break;
        case 63: this.symArr.push(30);
          break;
          
        default:
          break;
    }
  }


  newLabSym: LabResults[];

  getSymptoms(){
    this.getDy(this.symArr);
  }

  getDy(symArr){
    let date = 1995;
    let gender = "male";
    
    this.issueTable = this.labserv.getSym(symArr, gender, date).subscribe(returnA => { this.newLabSym = returnA; this.populateIssueTable(returnA); });

    

    //debug block
    //console.log("retrival : " + this.labserv.getSym(symArr, gender, date).subscribe(returnA => this.newLabSym = returnA));
    //console.log(this.issueTable);
    //console.log(this.newLabSym);

  }


  // top = new FormControl('');
  // toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor(private _formBuilder: FormBuilder, private labserv: SymptomCheckerAPIService) {}
  ngOnInit(): void {
  }

  //Duped from viewAppts
  issueTable: any=[];
  pushTable:any[] = [];
  dataSource:any[] = [];
  populateIssueTable(newLabSym:any[]){
    let count=0;
    for(let i of newLabSym) {  
         
      this.pushTable[count]={
        name:i.Issue.Name,
        accuracy:i.Issue.Accuracy,
        icd:i.Issue.Icd,
        icdName:i.Issue.IcdName,
        profName:i.Issue.ProfName,   
        ranking:i.Issue.Ranking,     
        specialist:i.Specialisation.Name
      };
      count++;
      //Debug Block
      
    }
    this.dataSource=this.pushTable;
        
    console.log(newLabSym); //debug
    console.log(this.dataSource); //debug
  }
  displayedColumns: string[] = ['name', 'accuracy','icd', 'icdName', 'profName', 'ranking', 'specialist'];
  
}
