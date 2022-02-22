import { Component, OnInit } from '@angular/core';
import {HelperService} from "../../services/helper/helper.service";

@Component({
  selector: 'game-data',
  templateUrl: './game-data.component.html',
  styleUrls: ['./game-data.component.scss']
})
export class GameDataComponent implements OnInit {

  constructor(private helper: HelperService) { }

  ngOnInit(): void {
  }

  onReset(): void {
    window.location.reload();
  }

  getBestScore() {
    // Method will return the best score. Maybe it will be Observable with unique or distinctUntilChanged operator.
    // Also it will use storage, so I'll do it little bit later.
  }
}
