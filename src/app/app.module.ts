import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

import { SelfAssignments } from './selfassignments/self-assignments.component';
import { WarningAlertComponent } from './selfassignments/warningalert/warningalert.component';
import { SuccessalertComponent } from './selfassignments/successalert/successalert.component';
import { TwoWayBindingComponent } from './selfassignments/two-way-binding/two-way-binding.component';
import { DirectivesComponent } from './selfassignments/directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SelfAssignments,
    WarningAlertComponent,
    SuccessalertComponent,
    TwoWayBindingComponent,
    DirectivesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
