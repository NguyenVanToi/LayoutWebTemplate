import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { 
  MatMenuModule,
  MatToolbarModule, 
  MatIconModule, 
  MatSidenavModule,
  MatTreeModule,
  MatTableModule
} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SensorComponent } from './sensor/sensor.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SensorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule, 
    HttpClientModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTreeModule,
    MatTableModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
