import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  getMaxHexNum(r) {
    if (r === 1) {
      return 1;
    } else {
      return this.getMaxHexNum(r - 1) + (6 * (r - 1));
    }
  }
}
