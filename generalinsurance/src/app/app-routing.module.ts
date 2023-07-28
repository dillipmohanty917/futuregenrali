import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
  path:"sidebar",
  component:SidebarComponent,
   },
   {
    path:"dashboard",
    component:DashboardComponent,
     },
     {
      path:"user-policy", 
      component:Dashboard2Component,
       },
  
     {
      path:"rightsidebar",
      component:RightsidebarComponent,
       },

           {
            path:"update-policy",
            component:UpdatePolicyComponent,
             },
            {
             path:"renewal-request",
             component:RenewalQueryRequestComponent,
              },
              {
                path:"surrender-retain",
                component:SurrenderretainComponent,
                 },
                 
                 {
                 path:"surrender-request",
                 component:SurrenderRequestComponent,
                  },
                   
                 {
                  path:"surrender-form",
                  component:SurrenderFormComponent,
                   },
                        
                 {
                  path:"surrender-pos",
                  component:SurrenderPosComponent,
                   },
                   {
                    path:"send-documents",
                    component:SendDocumentsComponent,
                     },
                     {
                      path:"partial-withdrawl-request-query",
                      component:PartialWithdrawlRequestComponent
                     },
                     {
                      path:"contact-details",
                      component:ContactDetailsComponent
                     }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
