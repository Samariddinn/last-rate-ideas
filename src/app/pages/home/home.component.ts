import { Component, inject, signal } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TabComponent } from '../../shared/tab/tab.component';
import { ModalComponent } from '../../modal/modal.component';
import { ideasStore } from '../../store/ideas/ideas.store';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, TabComponent, ModalComponent],
  templateUrl: './home.component.html'
})
export default class HomeComponent {
  ideasStore = inject(ideasStore)
  tabs = signal([{label : 'Tab 1', id: 1}, {label: 'Tab 2', id: 2}]);
}
