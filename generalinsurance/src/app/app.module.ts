import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './searchsidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';

import { UpdatePolicyComponent } from './update-policy/update-policy.component';
import { RenewalQueryRequestComponent } from './renewal-query-request/renewal-query-request.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { SurrenderretainComponent } from './surrender-retain/surrenderretain.component';
import { SurrenderRequestComponent } from './surrender-request/surrender-request.component';
import { SurrenderFormComponent } from './surrender-form/surrender-form.component';
import { SurrenderPosComponent } from './surrender-pos/surrender-pos.component';
import { SendDocumentsComponent } from './send-documents/send-documents.component';
import { PartialWithdrawlRequestComponent } from './partial-withdrawl-request/partial-withdrawl-request.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    RightsidebarComponent,
    UpdatePolicyComponent,
    RenewalQueryRequestComponent,
    Dashboard2Component,
    SurrenderretainComponent,
    SurrenderRequestComponent,
    SurrenderFormComponent,
    SurrenderPosComponent,
    SendDocumentsComponent,
    PartialWithdrawlRequestComponent,
    ContactDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
