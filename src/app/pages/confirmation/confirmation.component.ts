import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { InputGroupComponent } from '../../shared/input-group/input-group.component';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'app-confirmation',
  imports: [MatIcon, InputGroupComponent, MatRipple],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss'
})
export default class ConfirmationComponent {

}
