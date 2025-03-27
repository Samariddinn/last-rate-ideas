import { Component, inject, input, signal } from '@angular/core';
import { ModalItemsComponent } from './modal-items/modal-items.component';
import { ideasStore, IIdea } from '../store/ideas/ideas.store';

@Component({
  selector: 'app-modal',
  imports: [ModalItemsComponent],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  data = [
    {
      name: 'Jumayev Elyor',
      role: "Maktabgacha Ta'lim",
      
    },
  ]


  ideasStore = inject(ideasStore);

  title = input<string>('Fikrlar')

  canReact = input(true);
  canRemove = input(false)
  ideas = input<IIdea[]>([]);

  onSaveClick(id: number): void {
    this.ideasStore.updateSave(id);
  }
}
