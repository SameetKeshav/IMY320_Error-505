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
  monday = [
    {
      module: "COS 333",
      venue: "IT 4-4",
      startTime: "09:30",
      endTime: "10:20",
      type: "Lecture 1"
    },
    {
      module: "COS 301",
      venue: "IT 2-26",
      startTime: "10:30",
      endTime: "11:20",
      type: "Lecture 1"
    }
  ]
  tuesday = [
    {
      module: "COS 333",
      venue: "IT 4-4",
      startTime: "08:30",
      endTime: "09:20",
      type: "Lecture 2"
    },
    {
      module: "COS 330",
      venue: "IT 4-4",
      startTime: "14:30",
      endTime: "15:20",
      type: "Lecture 1"
    }
  ]
  wednesday = [
    {
      module: "COS 330",
      venue: "IT 4-4",
      startTime: "10:30",
      endTime: "11:20",
      type: "Lecture 2"
    }
  ]
  thursday = [
    {
      module: "COS 333",
      venue: "IT 4-4",
      startTime: "09:30",
      endTime: "10:20",
      type: "Practical"
    },
    {
      module: "COS 333",
      venue: "IT 42-27",
      startTime: "11:30",
      endTime: "12:20",
      type: "Tutorial"
    }
  ]
  friday = [
    {
      module: "COS 301",
      venue: "IT 2-26",
      startTime: "14:30",
      endTime: "15:20",
      type: "Lecture 2"
    }
  ]

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
