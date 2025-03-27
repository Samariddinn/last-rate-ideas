import { CommonModule } from '@angular/common';
import { Component, inject, input, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ideasStore, IIdea } from '../../store/ideas/ideas.store';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'app-modal-items',
  imports: [MatIconModule, MatRipple, MatButtonModule, CommonModule],
  templateUrl: './modal-items.component.html',
})
export class ModalItemsComponent {

  item = input<IIdea | null>(null);
  isOpened = signal(false);
  onSave = output<number>();

  toggleOpenBtn(): void {
    this.isOpened.update(value => !value);
  }

   

  canReact = input(true);
  canRemove = input(false);
}
