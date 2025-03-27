import { Component, Input, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule} from "@angular/material/button";
import { IconService } from './services/icon.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  // title = 'rate-ideas';
  iconsService = inject(IconService);

  ngOnInit(): void {
    this.iconsService.registerIcons();
  }
}