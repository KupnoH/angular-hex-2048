import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private http: HttpClient) { }

  getMaxHexNum(r: number): number {
    if (r === 1) {
      return 1;
    } else {
      return this.getMaxHexNum(r - 1) + (6 * (r - 1));
    }
  }

  // Return type of this method should be Observable<HexRowData>, but for some reason it's not. very strange
  getCellsData(radius: number, serverUrl: string, data: []) {
    const url = `${serverUrl}/${radius}`;

    return this.http.post(url, JSON.stringify(data));
  }
}
