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
  notifications = [1,2,3];
  activityStream=true;
  myChats = false;
  mySchedule = false;
  modulePage = false;
  tutorPage = false;
  classPage=false;
  request=true;
  className = '';
  moduleName = '';
  tutorName = '';
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

  modules = [
    "COS330",
    "COS301",
    "COS333",
  ]
  activityData = [
    {
      "date": "22/09",
      "name": ["Natasha Schwarts", "a Tutor (James Payne)", "You", "Kaden Bernard"],
      "category": ["message", "tutor", "notification", "message"],
      "time": ["3:30 PM", "2:00 PM", "1:00 PM", "11:00 AM"],
      "message": ["sent you a private message", "replied to your request","were mentioned on COS 330","sent you a private message"],
      "module": ["none","COS333","COS330","none"]
    },
    {
      "date": "21/09",
      "name": ["Natasha Schwarts", "a Tutor (James Payne)", "52", "James Payne", "Tutor (James Payne)"],
      "category": ["message", "tutor", "notification", "job", "material"],
      "time": ["5:00 PM", "4:00 PM", "11:30 AM", "10:00 AM", "9:00 AM"],
      "message": ["sent you a private message", "replied to your request","new messages on COS 330","posted a new job","posted material for COS 330"],
      "module": ["none","COS333","COS330","none","COS330"]
    }
  ]

  constructor(){
    this.activityStreamData = activityData;
    this.chatList = chatData;
    this.schedule = scheduleData;
    console.log(this.activityStreamData);
    console.log(this.activityStreamData.length);
    console.log(this.activityStreamData[0].date);

    console.log(this.activityData[0].module);
    if(this.activityData[0].module.includes("COS333")){
      console.log("yes");
    }
  }

  isactivityStream(){
    this.activityStream=true;
    this.myChats = false;
    this.mySchedule = false;
    this.modulePage=false;
    this.tutorPage=false;
    this.classPage=false;
  }
  ismyChats(){
    this.activityStream=false;
    this.myChats = true;
    this.mySchedule = false;
    this.modulePage=false;
    this.tutorPage=false;
    this.classPage=false;
  }
  ismySchedule(){
    this.activityStream=false;
    this.myChats = false;
    this.mySchedule = true;
    this.modulePage=false;
    this.tutorPage=false;
    this.classPage=false;
  }

  requestChange(){
    this.request=false;
  }

  openModule(module : string){
    this.modulePage=true;
    this.tutorPage=false;
    this.classPage=false;
    this.myChats = false;
    this.mySchedule = false;
    this.activityStream=false;
    this.moduleName = module;
  }

  openTutor(tutor : string){
    this.modulePage=false;
    this.tutorPage=true;
    this.classPage=false;
    this.myChats = false;
    this.mySchedule = false;
    this.activityStream=false;
    this.tutorName = tutor;
  }

  openClass(name : string){
    this.modulePage=false;
    this.tutorPage=false;
    this.classPage=true;
    this.myChats = false;
    this.mySchedule = false;
    this.activityStream=false;
    this.className = name;
  }

}
