import { Component } from '@angular/core';

@Component({
  selector: 'app-partial-withdrawl-request',
  templateUrl: './partial-withdrawl-request.component.html',
  styleUrls: ['./partial-withdrawl-request.component.css']
})
export class PartialWithdrawlRequestComponent {
  showULIPTable: boolean = false;
  showNonULIPTable: boolean = false;

  toggleULIPTable(): void {
    this.showULIPTable = !this.showULIPTable;
  }

  toggleNonULIPTable(): void {
    this.showNonULIPTable = !this.showNonULIPTable;
  }
  hideTables(): void {
    this.showULIPTable = false;
    this.showNonULIPTable = false;
  }
}
