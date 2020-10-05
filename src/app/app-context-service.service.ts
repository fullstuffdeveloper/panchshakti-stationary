import { Injectable } from '@angular/core';
import * as Config from '../../config/en.json';
@Injectable({
  providedIn: 'root',
})
export class AppContextServiceService {
  constructor() {}

  getConfig() {
    return Config;
  }
}
