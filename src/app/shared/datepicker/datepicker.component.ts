import { Component, ElementRef, input, signal, viewChild } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-datepicker',
  imports: [MatDatepickerModule, MatIcon, MatInputModule, MatIconModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './datepicker.component.html',
  styles: ``
})
export class DatepickerComponent {
  datePickerContainer = viewChild<ElementRef<HTMLDivElement>>('datePickerContainer');
    isPasswordHidden = signal(true);



    type = input<'text' | 'password' | 'email'>('text');

    max = input<Date | null>(null);
    min = input<Date | null> (null);
    

    placeholder = input<string>('');
    onFocus() {
       this.datePickerContainer()?.nativeElement.classList.add('focused');
    }

    onBlur (): void {
        this.datePickerContainer()?.nativeElement.classList.remove('focused');   
    }
}
