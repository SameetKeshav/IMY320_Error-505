import { Component } from '@angular/core';
import * as activityData from '../../data/activityStream.json'
import * as chatData from '../../data/chatList.json'
import * as scheduleData from '../../data/scheduleData.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  activityStreamData: any[];
  chatList: any[];
  schedule: any[];
  modules=[1,2,3];
  notifications = [1,2,3];
  activityStream=true;
  myChats = false;
  mySchedule = false;
  days: string[] = [];
  days2: number[] = [];

  constructor(){
    this.activityStreamData = activityData;
    this.chatList = chatData;
    this.schedule = scheduleData;
    console.log(this.activityStreamData);
    console.log(this.activityStreamData.length);
    console.log(this.activityStreamData[0].date);
    
  }

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
