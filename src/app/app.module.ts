import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { FormsModule } from '@angular/forms';
import { DeveloperTableComponent } from './developer-table/developer-table.component';
import { ProjectManagerTableComponent } from './project-manager-table/project-manager-table.component';
import { DesignerTableComponent } from './designer-table/designer-table.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    DeveloperTableComponent,
    ProjectManagerTableComponent,
    DesignerTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
