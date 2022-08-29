import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

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
  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });
  top = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
  }
  symtoms: symtom[] = [
    {value: 'Other', viewValue: 'Choose'},
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'},
    {value: 'Other', viewValue: 'Other'}
  ];

}
