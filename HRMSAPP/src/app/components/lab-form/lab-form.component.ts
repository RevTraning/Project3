import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';

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
        default:
          break;
    }
  }


  getDy(){
    return null;
  }

  // top = new FormControl('');
  // toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
  }
  // symtoms: symtom[] = [
  //   {value: 'Other', viewValue: 'Choose'},
  //   {value: 'Male', viewValue: 'Male'},
  //   {value: 'Female', viewValue: 'Female'},
  //   {value: 'Other', viewValue: 'Other'}
  // ];
  // displayedColumns: string[] = ['id', 'coursesName', 'dateOf', 'dateSub', 'location','description' , 'cost','gradingFormat', 'typeOfEvent', 'WorkJust', 'timeOffWork', 'superAppr', 'headAppr', 'coordiAppr', 'passingGrad', 'emplID'];
  // dataSource = this.symtoms;

}
