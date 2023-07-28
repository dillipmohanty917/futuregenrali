import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
@Output() myoutput:EventEmitter<any>= new EventEmitter();

  showSearchForm = false;
  advancesearchForm=false;
  

  toggleSearchForm() {
    this.advancesearchForm = false ;
    this.showSearchForm = !this.showSearchForm;
    this.myoutput.emit(this.showSearchForm);
  }

  advancetoggleForm(){
    this.showSearchForm=!this.showSearchForm;
     this.advancesearchForm = !this.advancesearchForm ;
     this.showSearchForm = false;
    // console.log("val",this.advancesearchForm);
  }

 
}
