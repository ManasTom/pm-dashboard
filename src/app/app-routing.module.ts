import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskPageComponent } from './components/create-task-page/create-task-page.component';
import { pmdashboardComponent } from './components/pmdashboard/pm-dashboard.component';
import { EditTaskPageComponent } from './components/edit-task-page/edit-task-page.component';
import { EmployeeListPageComponent } from './components/employee-list-page/employee-list-page.component';

const routes: Routes = [
  {path:"", component:pmdashboardComponent},
  {path:"create-task-page", component:CreateTaskPageComponent},
  {path:"edit-task-page", component:EditTaskPageComponent},
  {path:"employee-list-page", component:EmployeeListPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
