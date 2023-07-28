import { Component,AfterViewInit, ElementRef} from '@angular/core';
import { Tooltip } from 'bootstrap';
declare var $: any; 
@Component({
  selector: 'app-update-policy',
  templateUrl: './update-policy.component.html',
  styleUrls: ['./update-policy.component.css']
})
export class UpdatePolicyComponent {
  constructor(private elementRef: ElementRef){}
  public isDataVisible = false;
  selectedOption: any;
  suboption: any;
 
  ngOnInit() {
    // Initialize Bootstrap modal
    $('#myModal').modal('hide');
   
  }

  openModal() {
    $('#myModal').modal('show');
  }


  public toggleData(): void {
    this.isDataVisible = !this.isDataVisible;
  }

  onSelect(event:any) {
  this.selectedOption = event.target.value;
  console.log("first", this.selectedOption)
}
selectsuboption(event:any){
  this.suboption = event.target.value;
  console.log("second", this.suboption)
}


ngAfterViewInit() {
  const tooltipTriggerList = [].slice.call(
    this.elementRef.nativeElement.querySelectorAll('[data-bs-toggle="tooltip"]')
  ) as HTMLElement[];
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    const title = tooltipTriggerEl.getAttribute('data-bs-title');
    return new Tooltip(tooltipTriggerEl, {
      title: title ? title : '', // Set the title option based on the data-bs-title attribute
    });
  });
}

}
