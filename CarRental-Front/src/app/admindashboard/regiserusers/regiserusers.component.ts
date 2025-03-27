import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-regiserusers',
  templateUrl: './regiserusers.component.html',
  styleUrls: ['./regiserusers.component.css']
})
export class RegiserusersComponent implements OnInit {
  users: any[] = []; 
  constructor(private userService: UserServiceService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
