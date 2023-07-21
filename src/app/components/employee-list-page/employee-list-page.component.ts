import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-employee-list-page',
  templateUrl: './employee-list-page.component.html',
  styleUrls: ['./employee-list-page.component.css']
})
export class EmployeeListPageComponent {



  users = [
    { id: 1, name: 'Krishna', taskAssigned: 5, taskCompleted: 3 },
    { id: 2, name: 'Jane', taskAssigned: 10, taskCompleted: 7 },
    { id: 3, name: 'Syam', taskAssigned: 8, taskCompleted: 5 },
    { id: 4, name: 'Arun', taskAssigned: 8, taskCompleted: 5 },
    { id: 5, name: 'Arya', taskAssigned: 8, taskCompleted: 5 },
    { id: 6, name: 'Divya', taskAssigned: 8, taskCompleted: 5 },
    
    // Add more user objects as needed
  ];
  selectedUser: any;
  userList: any[] = [];

  // Custom property for displaying user information
  displayInfo(user: any): string {
    return `${user.name} (Task Assigned: ${user.taskAssigned}, Task Completed: ${user.taskCompleted})`;
  }

  addUser() {
    if (this.selectedUser) {
     
      this.userList.push(this.users[this.selectedUser-1]);
     // this.userList.push(this.selectedUser);
      //this.selectedUser = null;
    }
   
  }
  deleteUser(user: any) {
    const index = this.userList.indexOf(user);
    if (index > -1) {
      this.userList.splice(index, 1);
    }
  }
 



}
