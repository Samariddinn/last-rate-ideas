import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogModule,
    MatDialogRef,
    MatDialogTitle,
  } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
  

@Component ({
    selector: 'app-add-modal',
    templateUrl: './add-modal.component.html',
    imports: [MatButtonModule, MatDialogActions, MatInputModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatDialogContent, MatDialogTitle],
})

export class AddModalComponent {
    dialogRef = inject(MatDialogRef);
}