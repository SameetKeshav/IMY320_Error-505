import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  modules=[1,2,3];
  days=[1,2,3,4];
  notifications = [1,2,3];
  activityStream=false;
  myChats = false;
  mySchedule = false;
  modulePage = false;
  tutorPage = true;
  classPage=false;
  request=true;
  className = '';

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

  openModule(){
    this.modulePage=true;
    this.tutorPage=false;
    this.classPage=false;
    this.myChats = false;
    this.mySchedule = false;
    this.activityStream=false;
  }

  openTutor(){
    this.modulePage=false;
    this.tutorPage=true;
    this.classPage=false;
    this.myChats = false;
    this.mySchedule = false;
    this.activityStream=false;
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
