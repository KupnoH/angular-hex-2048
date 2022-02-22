import { Component, OnInit } from '@angular/core';
import { HexDataType, HexRowType } from "./types/hexDataTypes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hex2048';
  radius: number = 3;
  hexData: HexDataType = [];

  ngOnInit() {
    this.buildHexGrid(this.radius);
  }

  /**
   * Function to build hexagonal grid data.
   *
   * @param r - grid radius,
   */
  buildHexGrid(r: number) {
    // Build the first part of the grid.
    for (let i = 0; i < r; i++) { // i represents column.
      let row: HexRowType = [];
      for (let j = 0; j < (r + i); j++) { // j represents cell.
        // Calculate coordinates and create element and add it to row.
        row.push({
          x: i - j,
          y: r - i - 1,
          z: -(r - j - 1),
          value: 0,
        });
      }
      this.hexData.push(row);
    }

    // Build the second part.
    for (let i = r - 1; i > 0; i--) { // i represents column.
      let row = [];
      for (let j = 0; j < (r + i - 1); j ++) { // j - represents cell.
        // Calculate coordinates and create element and add it to row.
        row.push({
          x: r - j - 1,
          y: -(r - i),
          z: -(i - j - 1),
          value: 0,
        });
      }
      this.hexData.push(row);
    }
  }
}
