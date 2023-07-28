import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-surrenderretain',
  templateUrl: './surrenderretain.component.html',
  styleUrls: ['./surrenderretain.component.css']
})
export class SurrenderretainComponent {

  @ViewChild('fileInput') fileInput: any;

  handleIconClick() {
    this.fileInput.nativeElement.click();
  }

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
