import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    this.showSearchForm = true;
  }
  showSearchForm = false;
  advancesearchForm=false;
  outputValue:any = "";


  CapturedValue(event:any){
    this.outputValue = event;
    console.log("value", this.outputValue);
  }


  

  toggleSearchForm() {
    this.advancesearchForm = false ;
    this.showSearchForm = !this.showSearchForm;
 
  }

  advancetoggleForm(){
    this.showSearchForm=!this.showSearchForm;
     this.advancesearchForm = !this.advancesearchForm ;
     this.showSearchForm = false;
    // console.log("val",this.advancesearchForm);
  }


}
