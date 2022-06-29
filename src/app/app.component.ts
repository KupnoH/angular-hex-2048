import { Component, OnInit } from '@angular/core';
import { HexGridType, HexRowType } from "./types/hexDataTypes";
import {HelperService} from "./services/helper/helper.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hex2048';
  radius: number = 3;
  hexData: HexGridType = [];
  RNGServerURL = 'http://localhost:13337';

  constructor(private helper: HelperService) {
  }

  ngOnInit() {
    this.buildHexGridData(this.radius);
    this.makeCellsRequest();
  }

  /**
   * Function to build hexagonal grid data.
   *
   * @param r - grid radius,
   */
  buildHexGridData(r: number) {
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

  makeCellsRequest() {
    this.helper.getCellsData(this.radius, this.RNGServerURL, []).subscribe(data => this.addCellValues(data))
  }

  addCellValues(values: any): void {
    values.forEach((value:any) => {
      const cell = document.querySelector(
        '#main div div[data-x="' + value.x + '"][data-y="' + value.y + '"][data-z="' + value.z + '"]'
      );
      if (cell) {
        cell.setAttribute('data-value',
          !cell.getAttribute('data-value') ?
            value.value :
            parseInt(<string>cell.getAttribute('data-value')) + value.value
        );

        const childSpan = cell.firstElementChild && cell.firstElementChild.firstElementChild ? cell.firstElementChild.firstElementChild : null;
        if (childSpan) {
          childSpan.textContent = cell.getAttribute('data-value');

          // TODO: this needs rework. Because we need to change color also on parent element and it's :after and :before
          // Add different color to different cell with different number.
          const cellValue = parseInt(<string>cell.getAttribute('data-value'));
          const multiplier = cellValue < 256 ? cellValue : cellValue / 2;
          const colorB = multiplier <= 255 ? 220 - multiplier : 0;
          const colorR = colorB === 0 ? 150 + (multiplier - 220) : 220;
          const colorG = colorR === 255 ? 170 + (multiplier % 256) : 220;
          childSpan.setAttribute('style', `background-color: rgb(${colorR}, ${colorG}, ${colorB});`);
        }
      }
    });
    // TODO: get score from store and put the value here. Or maybe not here, but in game-data directly.
    // const scoreContainer = document.querySelector('.game-data .score span');
    // scoreContainer.innerText = score;
  }
}
