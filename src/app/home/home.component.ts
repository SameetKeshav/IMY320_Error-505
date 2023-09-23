import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  modules=[1,2,3];
  days=[1,2];
  notifications = [1,2,3];
  activityStream=true;
  myChats = false;
  mySchedule = false;

  isactivityStream(){
    this.activityStream=true;
    this.myChats = false;
    this.mySchedule = false;
  }
  ismyChats(){
    this.activityStream=false;
    this.myChats = true;
    this.mySchedule = false;
  }
  ismySchedule(){
    this.activityStream=false;
    this.myChats = false;
    this.mySchedule = true;
  }

}
