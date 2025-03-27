import { Component } from '@angular/core';
import { InputComponent } from '../../shared/inputs/input.component';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [InputComponent, MatButton],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {

}
