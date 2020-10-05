import { Component } from '@angular/core';
import {AppContextServiceService} from './app-context-service.service';

@Component({
  selector: 'studio-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'panchshakti-stationary';
  constructor(private appContext: AppContextServiceService) {
    console.log('%c:appContext', 'background: #ff00dd; color: #00ff00', this.appContext.getConfig());
  }
}
