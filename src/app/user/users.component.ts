import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  oUser: {};
    
  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {    
    this.getUsers();
  }

  getUsers(): void{
    this.userService.getUsers()
      .subscribe(res => {
        this.getAdaptedData(res);
      })
  }

  getMonth(date: string): string {
    let oDate: Date = new Date(date);
    return formatDate(oDate, 'MMMM', 'en_US');
  }

  getAdaptedData(aUser): void{
    let oAdaptedUsers: object = {};
    aUser.forEach(oUser => {
      if (oUser.dob) {
        oAdaptedUsers[this.getMonth(oUser.dob)] = [];        
      }      
    })

    aUser.forEach(oUser => {
      if (oUser.dob) {
        oAdaptedUsers[this.getMonth(oUser.dob)].push(oUser);        
      }      
    })

    this.oUser = oAdaptedUsers;
  }

  getUsersByMonth(aCurrUsers): string {
    let sResult: string = '';
    aCurrUsers.forEach(oUser => {
      if (oUser.firstName && oUser.lastName) {
        sResult += oUser.firstName + ' ' + oUser.lastName + '\n';
      }
    })
    return sResult;
  }

  getUsersCount(aCurrUsers): number {
    return aCurrUsers.length;
  }

}