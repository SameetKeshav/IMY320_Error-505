import { Component } from '@angular/core';
import * as activityData from '../../data/activityStream.json';
// import * as chatData from '../../data/chatList.json'
import * as scheduleData from '../../data/scheduleData.json'
import * as moduleChatData from '../../data/moduleChat.json'
import * as tutorChatData from '../../data/tutorChat.json'
import * as classChatData from '../../data/classmateChat.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  activityStreamData: any[];
  // chatList: any[];
  moduleChat = moduleChatData;
  tutorChat = tutorChatData;
  classChat = classChatData;
  schedule: any[];
  notifications = [1, 2, 3];
  activityStream = true;
  myChats = false;
  mySchedule = false;
  modulePage = false;
  tutorPage = false;
  classPage = false;
  request = true;
  className = '';
  moduleName = '';
  tutorName = '';
  tutorUrl = '';
  classUrl = '';
  showSearch = false;
  showJob = false;
  showMaterial = false;
  days: string[] = [];
  days2: number[] = [];
  monday = [
    {},
    {},
    {
      module: 'COS 333',
      venue: 'IT 4-4',
      startTime: '09:30',
      endTime: '10:20',
      type: 'Lecture 1',
    },
    {
      module: 'COS 301',
      venue: 'IT 2-26',
      startTime: '10:30',
      endTime: '11:20',
      type: 'Lecture 1',
    },
  ];
  tuesday = [
    {},
    {
      module: 'COS 333',
      venue: 'IT 4-4',
      startTime: '08:30',
      endTime: '09:20',
      type: 'Lecture 2',
    },
    {},
    {},
    {},
    {},
    {
      module: 'COS 330',
      venue: 'IT 4-4',
      startTime: '14:30',
      endTime: '15:20',
      type: 'Lecture 1',
    },
  ];
  wednesday = [
    {},
    {},
    {},
    {
      module: 'COS 330',
      venue: 'IT 4-4',
      startTime: '10:30',
      endTime: '11:20',
      type: 'Lecture 2',
    },
  ];
  thursday = [
    {},
    {},
    {
      module: 'COS 333',
      venue: 'IT 4-4',
      startTime: '09:30',
      endTime: '10:20',
      type: 'Practical',
    },
    {},
    {
      module: 'COS 333',
      venue: 'IT 42-27',
      startTime: '11:30',
      endTime: '12:20',
      type: 'Tutorial',
    },
  ];
  friday = [
    {},
    {},
    {},
    {},
    {},
    {},
    {
      module: 'COS 301',
      venue: 'IT 2-26',
      startTime: '14:30',
      endTime: '15:20',
      type: 'Lecture 2',
    },
  ];

  modules = ['COS330', 'COS301', 'COS333'];
  activityData = [
    {
      date: '22/09',
      name: [
        'Natasha Schwarts',
        'a Tutor (James Payne)',
        'You',
        'Kaden Bernard',
      ],
      category: ['message', 'tutor', 'notification', 'message'],
      time: ['3:30 PM', '2:00 PM', '1:00 PM', '11:00 AM'],
      message: [
        'sent you a private message',
        'replied to your request',
        'were mentioned on COS 330',
        'sent you a private message',
      ],
      module: ['none', 'COS333', 'COS330', 'none'],
    },
    {
      date: '21/09',
      name: [
        'Natasha Schwarts',
        'a Tutor (James Payne)',
        '52',
        'James Payne',
        'Tutor (James Payne)',
      ],
      category: ['message', 'tutor', 'notification', 'job', 'material'],
      time: ['5:00 PM', '4:00 PM', '11:30 AM', '10:00 AM', '9:00 AM'],
      message: [
        'sent you a private message',
        'replied to your request',
        'new messages on COS 330',
        'posted a new job',
        'posted material for COS 330',
      ],
      module: ['none', 'COS333', 'COS330', 'none', 'COS330'],
    },
  ];

  chatList = [
    {
      name: 'James Payne',
      profilePicture:
        'https://media.istockphoto.com/id/597958694/photo/young-adult-male-student-in-the-lobby-of-a-university.jpg?s=612x612&w=0&k=20&c=QaNEzmcKrLJzmwOcu2lgwm1B7rm3Ouq2McYYdmoMGpU=',
      message: 'Hi, I am the tutor',
    },
    {
      name: 'Natasha Schwarts',
      profilePicture:
        'https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg',
      message: 'Hey Julianna, nice to see you here.',
    },
    {
      name: 'Kaden Bernard',
      profilePicture:
        'https://remembermephotography.com/wp-content/uploads/2016/04/BD008cc.jpg',
      message: 'Hey Julianna, how are you?',
    },
  ];

  constructor() {
    this.activityStreamData = activityData;
    // this.chatList = chatData;
    this.schedule = scheduleData;
    console.log(this.activityStreamData);
    console.log(this.activityStreamData.length);
    console.log(this.activityStreamData[0].date);

    console.log(this.activityData[0].module);
    if (this.activityData[0].module.includes('COS333')) {
      console.log('yes');
    }

  }

  isactivityStream() {
    this.activityStream = true;
    this.myChats = false;
    this.mySchedule = false;
    this.modulePage = false;
    this.tutorPage = false;
    this.classPage = false;
  }
  ismyChats() {
    this.activityStream = false;
    this.myChats = true;
    this.mySchedule = false;
    this.modulePage = false;
    this.tutorPage = false;
    this.classPage = false;
  }
  ismySchedule() {
    this.activityStream = false;
    this.myChats = false;
    this.mySchedule = true;
    this.modulePage = false;
    this.tutorPage = false;
    this.classPage = false;
  }

  requestChange() {
    this.request = false;
  }

  openModule(module: string) {
    this.modulePage = true;
    this.tutorPage = false;
    this.classPage = false;
    this.myChats = false;
    this.mySchedule = false;
    this.activityStream = false;
    this.moduleName = module;
  }

  openTutor(tutor: string, url: string) {
    this.modulePage = false;
    this.tutorPage = true;
    this.classPage = false;
    this.myChats = false;
    this.mySchedule = false;
    this.activityStream = false;
    this.tutorName = tutor;
    this.tutorUrl = url;
    this.request = true;
  }

  openClass(name: string, url: string) {
    if (name == 'Julianna Venter') {
      return;
    } else if (name == 'James Payne') {
      this.openTutor(name, url);
    } else {
      this.modulePage = false;
      this.tutorPage = false;
      this.classPage = true;
      this.myChats = false;
      this.mySchedule = false;
      this.activityStream = false;
      this.className = name;
      this.classUrl = url;
    }
  }

  openSearch() {
    this.showSearch = true;
    this.showJob = false;
    this.showMaterial = false;
  }

  closeSearch() {
    this.showSearch = false;
    this.showJob = false;
    this.showMaterial = false;
  }

  openJob() {
    this.showJob = true;
    this.showMaterial = false;
    this.showSearch = false;
  }

  openMaterial() {
    this.showJob = false;
    this.showMaterial = true;
    this.showSearch = false;
  }

  setButtonOpacityToOne() {
    var button = document.getElementById('removeBtn');
    if (button) {
      button.style.opacity = '1';
    }
  }

  setButtonOpacityToZero() {
    var button = document.getElementById('removeBtn');
    if (button) {
      button.style.opacity = '0';
    }
  }

  formatCurrentDate() {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Note: Month is zero-based
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  sendTutorMessage(){

    const message = (<HTMLInputElement>document.getElementById('tutorMessage')).value;
    (<HTMLInputElement>document.getElementById('tutorMessage')).value = '';
    console.log(message);

    if(message !== ''){
      this.tutorChat.messages.push({
        from: 'Julianna Venter',
        date: this.formatCurrentDate(),
        profilePicture: 'https://image.shutterstock.com/image-photo/image-young-asian-woman-company-260nw-2122700972.jpg',
        message: message,
      })
    }
   
  }

  sendModuleMessage(){

    const message = (<HTMLInputElement>document.getElementById('moduleMessage')).value;
    (<HTMLInputElement>document.getElementById('moduleMessage')).value = '';
    console.log(message);

    if(message !== ''){
      this.moduleChat.messages.push({
        from: 'Julianna Venter',
        date: this.formatCurrentDate(),
        profilePicture: 'https://image.shutterstock.com/image-photo/image-young-asian-woman-company-260nw-2122700972.jpg',
        message: message,
      })
    }
   
  }

  sendClassMessage(){

    const message = (<HTMLInputElement>document.getElementById('classMessage')).value;
    (<HTMLInputElement>document.getElementById('classMessage')).value = '';
    console.log(message);

    if(message !== ''){
      this.classChat.messages.push({
        from: 'Julianna Venter',
        date: this.formatCurrentDate(),
        profilePicture: 'https://image.shutterstock.com/image-photo/image-young-asian-woman-company-260nw-2122700972.jpg',
        message: message,
      })
    }
  }
}
