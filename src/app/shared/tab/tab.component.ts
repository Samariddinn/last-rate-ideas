import { Component, input} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-tab',
  imports: [MatTabsModule],
  templateUrl: './tab.component.html'
})
export class TabComponent {
  // lotsOfTabs = new Array(5).fill(0).map((_, index) => `Tab ${index}`);

  tabs = input<any[]>()
}
