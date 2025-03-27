import { Component, inject, signal } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TabComponent } from '../../shared/tab/tab.component';
import { ModalComponent } from '../../modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { AddModalComponent } from './add-modal/add-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, TabComponent, ModalComponent, MatButtonModule, 
  ],
  templateUrl: './my-ideas.component.html',
  styles: `
   .bg-success-100 {
    color: rgb(255 255 255 / 1);
   }
  `
})
export default class MyIdeas {
  readonly dialog = inject(MatDialog);
  tabs = signal([{label : 'Tab 1', id: 1}, {label: 'Tab 2', id: 2}]);

  openDialog(): void {
    const dialogRef = this.dialog.open(AddModalComponent, {
      width: '60%',
    });
  }

  


}
