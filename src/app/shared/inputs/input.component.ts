import { CommonModule } from '@angular/common';
import  { Component, viewChild, ElementRef, signal, input} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


enum InputTypes {
    text = 'text',
    password = 'password',
    email = 'email'
}

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    imports: [MatIconModule, CommonModule],
    styles : [
        `
        .focused {
            outline: 1px solid blue;
        }
        `
    ]
})

export class InputComponent {
    inputContainer = viewChild<ElementRef<HTMLDivElement>>('inputContainer');
    isPasswordHidden = signal(true);



    type = input<'text' | 'password' | 'email'>(InputTypes.text);

    inputTypes = InputTypes;

    placeholder = input<string>('');

    togglePasswordVisibility(): void {
     this.isPasswordHidden.update(value => !value);
    }

    onFocus() {
       this.inputContainer()?.nativeElement.classList.add('focused');
    }

    onBlur (): void {
        this.inputContainer()?.nativeElement.classList.remove('focused');   
    }
}