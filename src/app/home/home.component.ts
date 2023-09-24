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
  days: string[] = [];
  days2: number[] = [];
  showRemoveButton = false;

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

  removeModule(m:any){
    return;
  }
}
