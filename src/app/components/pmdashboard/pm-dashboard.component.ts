import { Component } from '@angular/core';
import { Task } from '../task.model';
import { NgSelectModule } from '@ng-select/ng-select';
@Component({
  selector: 'app-task-list',
  templateUrl: './pm-dashboard.component.html',
  styleUrls: ['./pm-dashboard.component.css']
})
export class pmdashboardComponent {
  tasks: Task[] = [
    { name: 'Task A', deadline: '2023-08-15', EmpName: 'John Doe', progress: 30, ProjName: 'proj1' },
    { name: 'Task B', deadline: '2023-08-15', EmpName: 'Jane Smith', progress: 50, ProjName: 'proj2' },
    { name: 'Task C', deadline: '2023-08-15', EmpName: 'Bob Johnson', progress: 80, ProjName: 'proj3' },
  ];
}

