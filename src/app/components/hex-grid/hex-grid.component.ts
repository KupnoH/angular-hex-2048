import {Component, Input, OnInit} from '@angular/core';
import {HexGridType} from "../../types/hexDataTypes";

@Component({
  selector: 'hex-grid',
  templateUrl: './hex-grid.component.html',
  styleUrls: ['./hex-grid.component.scss']
})
export class HexGridComponent implements OnInit {
  @Input() public hexData: HexGridType = [];

  constructor() { }

  ngOnInit(): void {
  }
}
