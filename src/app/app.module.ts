import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { pmdashboardComponent } from './components/pmdashboard/pm-dashboard.component';

import { RouterModule, Routes } from '@angular/router';
import { CreateTaskPageComponent } from './components/create-task-page/create-task-page.component';
import { EditTaskPageComponent } from './components/edit-task-page/edit-task-page.component';
import { EmployeeListPageComponent } from './components/employee-list-page/employee-list-page.component';




const routes: Routes = [ 
  {path:'CreateTaskPageComponent', component: CreateTaskPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
  
    pmdashboardComponent,
    EditTaskPageComponent,
    EmployeeListPageComponent,
      
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

