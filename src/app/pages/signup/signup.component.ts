import { Component } from '@angular/core';
import { InputComponent } from '../../shared/inputs/input.component';
import { MatButton } from '@angular/material/button';
import { DatepickerComponent } from '../../shared/datepicker/datepicker.component';

@Component({
  selector: 'app-signup',
  imports: [InputComponent, MatButton,  DatepickerComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export default class SignupComponent {
  readonly ageRestrictions = { max: new Date('01/01/2010'), min: new Date('01/01/1950') };}
