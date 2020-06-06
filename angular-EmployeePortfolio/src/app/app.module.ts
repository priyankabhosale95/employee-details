import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QualificationListComponent } from './components/qualification-list/qualification-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeService } from './services/employee.service';
import { QualificationService } from './services/qualification.service';



@NgModule({
  declarations: [
    AppComponent,
    QualificationListComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    QualificationService,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
