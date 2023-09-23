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
  days=[1,2,3,4];
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

  constructor(){
    this.activityStreamData = activityData;
    this.chatList = chatData;
    this.schedule = scheduleData;
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
