import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Tooltip } from 'bootstrap';
declare var $: any; 
@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit, AfterViewInit{
   
  constructor(private elementRef: ElementRef){}
  showSearchForm = true;
  outputValue:any = "";
  

 
  CapturedValue(event:any){
    this.outputValue = event;
    console.log("value", this.outputValue);
  }


  ngOnInit() {
    // Initialize Bootstrap modal
    $('#myModal').modal('hide'); 
  }

  openModal() {
    $('#myModal').modal('show');
  }


  // ngAfterViewInit() {
  //   const tooltipTriggerList = [].slice.call(this.elementRef.nativeElement.querySelectorAll('[data-bs-toggle="tooltip"]'));
  //   tooltipTriggerList.map(function (tooltipTriggerEl) {
  //     return new Tooltip(tooltipTriggerEl);
  //   });
  // }

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
