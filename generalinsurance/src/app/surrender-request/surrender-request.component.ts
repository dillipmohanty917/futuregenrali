import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-surrender-request',
  templateUrl: './surrender-request.component.html',
  styleUrls: ['./surrender-request.component.css']
})
export class SurrenderRequestComponent {


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

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;
    const isInsideTable = clickedElement.closest('.container-fluid');
    if (!isInsideTable) {
      this.hideTables();
    }
  }
}
