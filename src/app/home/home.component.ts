import * as activityData from '../../data/activityStream.json';
// import * as chatData from '../../data/chatList.json'
import * as scheduleData from '../../data/scheduleData.json';
import * as moduleChatData from '../../data/moduleChat.json';
import * as tutorChatData from '../../data/tutorChat.json';
import * as classChatData from '../../data/classmateChat.json';
import { Component, Inject } from '@angular/core';

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
  activityStream = false;
  myChats = false;
  mySchedule = false;
  modulePage = true;
  tutorPage = false;
  classPage = false;
  chatRoom = false;
  roomsPage = true;
  request = false;
  loggedIn = true;
  signUp = false;
  about = false;
  roomId: number = 0;
  className = 'TempName';
  moduleName = '';
  tutorName = 'TutorTempName';
  tutorUrl = '';
  classUrl = '';
  searchText = '';
  showSearch = false;
  showJob = false;
  showMaterial = false;
  days: string[] = [];
  days2: number[] = [];
  showModules = true;
  showPopup = false;
  hasMemo = false;
  username = '';
  seenModules = [false,false,false];
  options = [
    'COS341',
    'COS332',
    'COS310',
    'IMY320',
    'IMY310',
    'STK320',
    'STK330',
    'WST300',
  ];
  allOptions = [
    'COS341',
    'COS332',
    'COS310',
    'IMY310',
    'IMY320',
    'COS326',
    'COS333',
    'COS330',
    'COS301',
  ];

  chatrooms = [
    {
      id: 1,
      name: 'Semester Test 1 Papers',
      description: 'Past papers for semester test 1',
      filename: 'semester_test_1.zip',
      memo: true,
    },
    {
      id: 2,
      name: 'Semester Test 2 Papers',
      description: 'Past papers for semester test 2',
      filename: 'semester_test_2.zip',
      memo: true,
    },
    {
      id: 3,
      name: 'Exam Papers',
      description: 'Past papers for exams',
      filename: 'exams.zip',
      memo: true,
    },
    {
      id: 4,
      name: 'Assignment 1',
      description: 'Previous assignment 1 papers',
      filename: 'assignment_1.pdf',
      memo: false,
    },
    {
      id: 5,
      name: 'Assignment 2',
      description: 'Previous assignment 2 papers',
      filename: 'assignment_2.pdf',
      memo: false,
    },
    {
      id: 6,
      name: 'Assignment 3',
      description: 'Previous assignment 3 papers',
      filename: 'assignment_3.pdf',
      memo: true,
    },
    {
      id: 7,
      name: 'Assignment 4',
      description: 'Previous assignment 4 papers',
      filename: 'assignment_4.pdf',
      memo: false,
    },
    {
      id: 8,
      name: 'Tutorial 1',
      description: 'Tutorial 1 Prep Questions',
      filename: 'tut1.pdf',
      memo: false,
    },
    {
      id: 9,
      name: 'Chapter 4 Notes',
      description: 'Detailed textbook notes on chapter 4',
      filename: 'Ch4.pdf',
      memo: false,
    },
  ];

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
    {},
    {},
    {},
    {},
    {},
    {},
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
    {},
    {
      module: 'COS 330',
      venue: 'IT 4-4',
      startTime: '14:30',
      endTime: '15:20',
      type: 'Lecture 1',
    },
    {},
    {},
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
    {},
    {},
    {},
    {},
    {},
    {},
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
    {},
    {},
    {},
    {},
    {},
  ];
  friday = [
    {},
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
    {},
    {},
  ];

  modules = ['COS330', 'COS301', 'COS333'];
  activityData = [
    {
      "date": this.getDateInDDMM(0),
      "name": [
        "Natasha Schwarts",
        "A Tutor (James Payne)",
        "You",
        "Kaden Bernard",
        "A Tutor (James Payne)",
        "Natasha Schwarts",
        "Kaden Bernard",
        "A Tutor (James Payne)",
        "Kaden Bernard"
      ],
      "category": ["message", "tutor", "notification", "message", "message", "notification", "message", "tutor", "message"],
      "time": ["3:30 AM", "1:00 PM", "2:00 PM", "11:00 PM", "4:30 AM", "6:00 AM", "8:45 AM", "9:30 AM", "12:00 PM", "3:15 PM"],
      "message": [
        "sent you a private message",
        "replied to your request",
        "were mentioned on COS 333",
        "sent you a private message",
        "sent you a private message",
        "shared a resource on COS 330",
        "sent you 20 messages",
        "shared a resource on COS 330",
        "sent you 15 messages"
      ],
      "module": ["none", "COS333", "COS330", "none", "COS333", "none", "none", "COS330", "none"],
      "route": ["Natasha Schwarts", "James Payne", "cos330", "Kaden Bernard", "James Payne", "Natasha Schwarts", "Kaden Bernard", "cos330", "Kaden Bernard"],
      "url": [
        "https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg",
        "https://media.istockphoto.com/id/597958694/photo/young-adult-male-student-in-the-lobby-of-a-university.jpg?s=612x612&w=0&k=20&c=QaNEzmcKrLJzmwOcu2lgwm1B7rm3Ouq2McYYdmoMGpU=",
        "none",
        "https://remembermephotography.com/wp-content/uploads/2016/04/BD008cc.jpg",
        "https://media.istockphoto.com/id/597958694/photo/young-adult-male-student-in-the-lobby-of-a-university.jpg?s=612x612&w=0&k=20&c=QaNEzmcKrLJzmwOcu2lgwm1B7rm3Ouq2McYYdmoMGpU=",
        "https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg",
        "https://remembermephotography.com/wp-content/uploads/2016/04/BD008cc.jpg",
        "https://media.istockphoto.com/id/597958694/photo/young-adult-male-student-in-the-lobby-of-a-university.jpg?s=612x612&w=0&k=20&c=QaNEzmcKrLJzmwOcu2lgwm1B7rm3Ouq2McYYdmoMGpU=",
        "https://remembermephotography.com/wp-content/uploads/2016/04/BD008cc.jpg"
      ]
    },    
    {
      "date": this.getDateInDDMM(1),
      "name": [
        "Natasha Schwarts",
        "A Tutor (James Payne)",
        "52",
        "Tutor (James Payne)",
        "Kaden Bernard",
        "Natasha Schwarts",
        "Tutor (James Payne)",
        "Kaden Bernard",
        "A Tutor (James Payne)"
      ],
      "category": ["message", "tutor", "notification", "material", "message", "notification", "tutor", "message", "tutor"],
      "time": ["5:00 AM", "4:00 AM", "11:30 AM", "12:00 PM", "1:45 PM", "3:20 PM", "6:15 PM", "7:30 PM", "8:00 PM", "9:10 PM"],
      "message": [
        "sent you a private message",
        "replied to your request",
        "new messages on COS 330",
        "shared a resource on COS 330",
        "sent you a private message",
        "shared a resource on COS 330",
        "shared a resource on COS 330",
        "sent you 10 private messages",
        "sent you 5 messages"
      ],
      "module": ["none", "COS333", "COS330", "COS330", "COS331", "COS330", "COS330", "none", "COS330"],
      "route": ["Natasha Schwarts", "James Payne", "cos330", "cos330", "Kaden Bernard", "cos330", "cos330", "Kaden Bernard", "James Payne"],
      "url": [
        "https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg",
        "https://media.istockphoto.com/id/597958694/photo/young-adult-male-student-in-the-lobby-of-a-university.jpg?s=612x612&w=0&k=20&c=QaNEzmcKrLJzmwOcu2lgwm1B7rm3Ouq2McYYdmoMGpU=",
        "none",
        "none",
        "https://remembermephotography.com/wp-content/uploads/2016/04/BD008cc.jpg",
        "none",
        "none",
        "https://remembermephotography.com/wp-content/uploads/2016/04/BD008cc.jpg",
        "none"
      ]
    },
    {
      "date": this.getDateInDDMM(2),
      "name": [
        "Natasha Schwarts",
        "A Tutor (James Payne)",
        "Kaden Bernard",
        "Tutor (James Payne)",
      ],
      "category": ["notification", "tutor", "message", "material"],
      "time": ["5:00 AM", "4:00 AM", "11:30 AM", "12:00 PM"],
      "message": [
        "shared a resource on COS 330",
        "sent you a private message",
        "sent you a private message",
        "shared a resource on COS 330",
      ],
      "module": ["COS330", "James Payne", "Kaden Bernard", "COS330"],
      "route": ["cos330", "James Payne", "Kaden Bernard", "cos330"],
      "url": [
        "none",
        "none",
        "https://remembermephotography.com/wp-content/uploads/2016/04/BD008cc.jpg",
        "none",
      ]
    },
    {
      "date": this.getDateInDDMM(3),
      "name": [
        "Natasha Schwarts",
        "Kaden Bernard",
        "Kaden Bernard",
        "Tutor (James Payne)",
      ],
      "category": ["notification", "message", "notification", "material"],
      "time": ["5:00 AM", "4:00 AM", "11:30 AM", "12:00 PM"],
      "message": [
        "shared a resource on COS 330",
        "sent you 5 private messages",
        "shared a resource on COS 330",
        "sent you a private message",
      ],
      "module": ["COS330", "Kaden Bernard", "COS330", "James Payne"],
      "route": ["cos330", "Kaden Bernard", "cos330", "James Payne"],
      "url": [
        "none",
        "https://remembermephotography.com/wp-content/uploads/2016/04/BD008cc.jpg",
        "none",
        "none",
      ]
    }         
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
      message: 'Hey, nice to see you here.',
    },
    {
      name: 'Kaden Bernard',
      profilePicture:
        'https://remembermephotography.com/wp-content/uploads/2016/04/BD008cc.jpg',
      message: 'Hey, how are you?',
    },
    {
      name: "Kim Smith",
      profilePicture: "https://c8.alamy.com/comp/E0CGET/woman-indoors-E0CGET.jpg",
      message: "Hey"
    },
    {
      name: "John Doe",
      profilePicture: "https://previews.123rf.com/images/lightfieldstudios/lightfieldstudios1710/lightfieldstudios171000171/87883899-handsome-smiling-man.jpg?fj=1",
      message: "How are you?"
    },
    {
      name: "Lanna Lee",
      profilePicture: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?cs=srgb&dl=pexels-moose-photos-1036623.jpg&fm=jpg",
      message: "Hello, I am Lanna"
    },
    {
      name: "Nate Parker",
      profilePicture: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      message: "Hi, I am Nate"
    },
    {
      name: "Katie Smith",
      profilePicture: "https://media.glamourmagazine.co.uk/photos/61388cc92b5bbea008291859/16:9/w_2560%2Cc_limit/iStock-545338914.jpg",
      message: "Hey, I am Katie"
    },
    {
      name: "Emma Johnson",
      profilePicture: "https://www.davidson.edu/sites/default/files/styles/small_16x9/public/2020-10/Grace_Rooker%2724_03.jpg?h=f8c78304&itok=MpvFeaQ9",
      message: "Hey, how are you?!"
    },
    {
      name: "Liam Williams",
      profilePicture: "https://www.ntu.ac.uk/__data/assets/image/0018/110709/aamir-khalique.jpg",
      message: "Did you do assignment 3..."
    },
    {
      name: "Olivia Davis",
      profilePicture: "https://media.illinois.edu/sites/default/files/styles/profile/public/2023-09/Veranika-400.jpg?itok=2lDdrkhH",
      message: "I though we were going t..."
    },
    {
      name: "Noah Jones",
      profilePicture: "https://img.freepik.com/premium-photo/beautiful-realistic-portrait-smiling-young-college-student-with-books-backpack-against-white-background_908985-7634.jpg",
      message: "Did they ever release t..."
    },
    {
      name: "Sophia Nijgard",
      profilePicture: "https://media.istockphoto.com/id/1333838172/photo/indoor-headshot-portrait-of-cheerful-young-indian-female-businesswoman-student.jpg?s=612x612&w=0&k=20&c=GGPz0QlmMKYEt497R4HNRC8Pacha-lwpSe1fiqRwcjI=",
      message: "No, I don't think that th..."
    }
  ];

  getDateInDDMM(offset: number): string {
    const today = new Date();
    const targetDate = new Date(today.getTime() - offset * 24 * 60 * 60 * 1000);
  
    const dd = String(targetDate.getDate()).padStart(2, '0');
    const mm = String(targetDate.getMonth() + 1).padStart(2, '0'); // January is 0!
    return dd + '/' + mm;
  }

  constructor() {
    this.activityStreamData = activityData;
    // this.chatList = chatData;
    this.schedule = scheduleData;
    // console.log(this.activityStreamData);
    // console.log(this.activityStreamData.length);
    // console.log(this.activityStreamData[0].date);

    // console.log(this.activityData[0].module);
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
    this.about = false;
  }
  ismyChats() {
    this.activityStream = false;
    this.myChats = true;
    this.mySchedule = false;
    this.modulePage = false;
    this.tutorPage = false;
    this.classPage = false;
    this.about = false;
  }
  ismySchedule() {
    this.activityStream = false;
    this.myChats = false;
    this.mySchedule = true;
    this.modulePage = false;
    this.tutorPage = false;
    this.classPage = false;
    this.about = false;
  }

  requestChange() {
    this.request = false;
  }

  makeRequest() {
    const message = (<HTMLInputElement>document.getElementById('requestMessage'))
      .value;
    this.tutorChat.messages.push({
      from: this.username,
      date: this.formatCurrentDate(),
      profilePicture: "https://image.shutterstock.com/image-photo/image-young-asian-woman-company-260nw-2122700972.jpg",
      message: message,
      isRequest: true
    })
  }

  notificationClick(route: string, url: string) {
    if (
      route == 'James Payne' ||
      route == 'Kaden Bernard' ||
      route == 'Natasha Schwarts'
    ) {
      this.openClass(route, url);
    } else if (route == 'cos330') {
      this.openModule('COS 330');
    } else if (route == 'job') {
      this.openModule('COS 330');
      this.openJob();
    } else {
      return;
    }
  }

  openModule(module: string) {
    this.modulePage = true;
    this.tutorPage = false;
    this.classPage = false;
    this.myChats = false;
    this.mySchedule = false;
    this.activityStream = false;
    this.moduleName = module;
    this.chatRoom = false;
    this.roomsPage = true;
    this.about = false;
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
    this.about = false;
    // this.request = true;
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
    this.about = false;
  }

  openSearch() {
    this.showSearch = true;
    this.showJob = false;
    this.showMaterial = false;
    this.about = false;
  }

  closeSearch() {
    this.showSearch = false;
    this.showJob = false;
    this.showMaterial = false;
    this.about = false;
  }

  openJob() {
    this.showJob = true;
    this.showMaterial = false;
    this.showSearch = false;
    this.about = false;
  }

  openMaterial() {
    this.showJob = false;
    this.showMaterial = true;
    this.showSearch = false;
    this.about = false;
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

  sendTutorMessage() {
    const message = (<HTMLInputElement>document.getElementById('tutorMessage'))
      .value;
    (<HTMLInputElement>document.getElementById('tutorMessage')).value = '';
    console.log(message);

    if (message !== '') {
      this.tutorChat.messages.push({
        from: this.username,
        date: this.formatCurrentDate(),
        profilePicture:
          'https://image.shutterstock.com/image-photo/image-young-asian-woman-company-260nw-2122700972.jpg',
        message: message,
        isRequest: false
      });
    }
  }

  sendModuleMessage() {
    const message = (<HTMLInputElement>document.getElementById('moduleMessage'))
      .value;
    (<HTMLInputElement>document.getElementById('moduleMessage')).value = '';
    console.log(message);

    if (message !== '') {
      this.moduleChat.messages[this.roomId].push({
        from: this.username,
        date: this.formatCurrentDate(),
        profilePicture:
          'https://image.shutterstock.com/image-photo/image-young-asian-woman-company-260nw-2122700972.jpg',
        message: message,
      });
    }
  }

  sendClassMessage() {
    const message = (<HTMLInputElement>document.getElementById('classMessage'))
      .value;
    (<HTMLInputElement>document.getElementById('classMessage')).value = '';
    console.log(message);

    if (message !== '') {
      this.classChat.messages.push({
        from: this.username,
        date: this.formatCurrentDate(),
        profilePicture:
          'https://image.shutterstock.com/image-photo/image-young-asian-woman-company-260nw-2122700972.jpg',
        message: message,
      });
    }
  }

  search() {
    let filterModules = [...this.allOptions];

    filterModules = this.allOptions.filter((item) => {
      return item.toLowerCase().includes(this.searchText.toLowerCase());
    });

    this.options = filterModules;

    
  }

  searchAll(){
    this.options = this.allOptions;
    this.showModules = false;
  }

  searchClose() {
    this.showModules = true;
    this.searchText = '';
  }

  openChatRoom(roomName: number) {
    this.chatRoom = true;
    this.roomsPage = false;
    this.roomId = roomName - 1;
    console.log('id: ' + this.roomId);
  }

  showAbout() {
    this.about = true;
    this.activityStream = false;
    this.myChats = false;
    this.mySchedule = false;
    this.modulePage = false;
    this.tutorPage = false;
    this.classPage = false;
  }

  download() {
    const fileContent = 'This is the content of the files you are downloading';
    const blob = new Blob([fileContent], { type: 'text/plain' });

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = this.chatrooms[this.roomId].filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
  }

  selectedFileName: string = '';

  onFileSelected(event: any): void {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      this.selectedFileName = selectedFile.name;

      console.log('Selected file:', selectedFile);
    } else {
      this.selectedFileName = '';
    }
  }

  add(m: any) {
    this.modules.push(m);
    this.seenModules.push(false);
    this.showModules = !this.showModules;
    this.options = this.options.filter((item) => item !== m);
    this.allOptions = this.allOptions.filter((item) => item !== m);
    console.log(this.options);

    if (m == 'COS301') {
      this.monday[3] = {
        module: 'COS 301',
        venue: 'IT 2-26',
        startTime: '10:30',
        endTime: '11:20',
        type: 'Lecture 1',
      };
      this.friday[7] = {
        module: 'COS 301',
        venue: 'IT 2-26',
        startTime: '14:30',
        endTime: '15:20',
        type: 'Lecture 2',
      };
      return;
    }
    if (m == 'COS330') {
      this.tuesday[7] = {
        module: 'COS 330',
        venue: 'IT 4-4',
        startTime: '14:30',
        endTime: '15:20',
        type: 'Lecture 1',
      };
      this.wednesday[3] = {
        module: 'COS 330',
        venue: 'IT 4-4',
        startTime: '10:30',
        endTime: '11:20',
        type: 'Lecture 2',
      };

      return;
    }
    if (m == 'COS333') {
      this.monday[2] = {
        module: 'COS 333',
        venue: 'IT 4-4',
        startTime: '09:30',
        endTime: '10:20',
        type: 'Lecture 1',
      };
      this.tuesday[1] = {
        module: 'COS 333',
        venue: 'IT 4-4',
        startTime: '08:30',
        endTime: '09:20',
        type: 'Lecture 2',
      };
      this.thursday[2] = {
        module: 'COS 333',
        venue: 'IT 4-4',
        startTime: '09:30',
        endTime: '10:20',
        type: 'Practical',
      };
      this.thursday[4] = {
        module: 'IMY 320',
        venue: 'IT 4-2',
        startTime: '11:30',
        endTime: '12:20',
        type: 'Practical',
      };

      return;
    }
    if (m == 'COS341') {
      this.monday[0] = {
        module: 'COS 341',
        venue: 'IT 2-26',
        startTime: '07:30',
        endTime: '08:20',
        type: 'Lecture 1',
      };
      this.tuesday[5] = {
        module: 'COS 341',
        venue: 'IT 2-26',
        startTime: '12:30',
        endTime: '13:20',
        type: 'Practical',
      };
      this.tuesday[6] = {
        module: 'COS 341',
        venue: 'IT 2-26',
        startTime: '13:30',
        endTime: '14:20',
        type: 'Practical',
      };
      this.tuesday[9] = {
        module: 'COS 341',
        venue: 'IT 2-26',
        startTime: '16:30',
        endTime: '17:20',
        type: 'Tutorial',
      };
      this.wednesday[6] = {
        module: 'COS 341',
        venue: 'IT 2-26',
        startTime: '13:30',
        endTime: '14:20',
        type: 'Lecture 2',
      };
      return;
    }
    if (m == 'COS332') {
      this.monday[1] = {
        module: 'COS 332',
        venue: 'IT 2-27',
        startTime: '08:30',
        endTime: '09:20',
        type: 'Lecture 1',
      };
      this.monday[6] = {
        module: 'COS 332',
        venue: 'IT 2-27',
        startTime: '13:30',
        endTime: '14:20',
        type: 'Tutorial',
      };
      this.monday[7] = {
        module: 'COS 332',
        venue: 'IT 2-27',
        startTime: '14:30',
        endTime: '15:20',
        type: 'Tutorial',
      };
      this.wednesday[1] = {
        module: 'COS 332',
        venue: 'IT 2-27',
        startTime: '08:30',
        endTime: '09:20',
        type: 'Lecture 2',
      };
      return;
    }
    if (m == 'IMY320') {
      this.monday[5] = {
        module: 'IMY 320',
        venue: 'IT 4-2',
        startTime: '12:30',
        endTime: '13:20',
        type: 'Lecture 1',
      };
      this.thursday[0] = {
        module: 'IMY 320',
        venue: 'IT 4-2',
        startTime: '07:30',
        endTime: '08:20',
        type: 'Lecture 2',
      };
      this.thursday[1] = {
        module: 'IMY 320',
        venue: 'IT 4-2',
        startTime: '08:30',
        endTime: '09:20',
        type: 'Lecture 3',
      };
      this.thursday[3] = {
        module: 'IMY 320',
        venue: 'IT 4-2',
        startTime: '10:30',
        endTime: '11:20',
        type: 'Practical',
      };

      this.friday[8] = {
        module: 'IMY 320',
        venue: 'IT 4-2',
        startTime: '15:30',
        endTime: '16:20',
        type: 'Tutorial',
      };
      return;
    }
    if (m == 'IMY310') {
      this.monday[4] = {
        module: 'IMY 310',
        venue: 'IT 4-4',
        startTime: '11:30',
        endTime: '12:20',
        type: 'Lecture 1',
      };
      this.wednesday[8] = {
        module: 'IMY 310',
        venue: 'IT 4-4',
        startTime: '15:30',
        endTime: '16:20',
        type: 'Practical',
      };
      this.wednesday[9] = {
        module: 'IMY 310',
        venue: 'IT 4-4',
        startTime: '16:30',
        endTime: '17:20',
        type: 'Practical',
      };
      this.friday[4] = {
        module: 'IMY 310',
        venue: 'IT 4-4',
        startTime: '11:30',
        endTime: '12:20',
        type: 'Tutorial',
      };
      this.friday[5] = {
        module: 'IMY 310',
        venue: 'IT 4-4',
        startTime: '12:30',
        endTime: '13:20',
        type: 'Tutorial',
      };

      return;
    }

    if (m == 'COS310') {
      this.tuesday[8] = {
        module: 'COS 310',
        venue: 'IT 4-5',
        startTime: '15:30',
        endTime: '16:20',
        type: 'Lecture 1',
      };
      this.wednesday[4] = {
        module: 'COS 310',
        venue: 'IT 4-5',
        startTime: '11:30',
        endTime: '12:20',
        type: 'Practical',
      };
      this.wednesday[5] = {
        module: 'COS 310',
        venue: 'IT 4-5',
        startTime: '12:30',
        endTime: '13:20',
        type: 'Practical',
      };
      this.thursday[6] = {
        module: 'COS 310',
        venue: 'IT 4-5',
        startTime: '13:30',
        endTime: '14:20',
        type: 'Lecture 2',
      };
      this.thursday[7] = {
        module: 'COS 310',
        venue: 'IT 4-5',
        startTime: '14:30',
        endTime: '15:20',
        type: 'Lecture 3',
      };
      this.friday[0] = {
        module: 'COS 310',
        venue: 'IT 4-5',
        startTime: '07:30',
        endTime: '08:20',
        type: 'Lecture 4',
      };

      return;
    }
    if (m == 'STK320') {
      this.monday[8] = {
        module: 'STK 320',
        venue: 'IT 4-3',
        startTime: '15:30',
        endTime: '16:20',
        type: 'Lecture 1',
      };
      this.tuesday[2] = {
        module: 'STK 320',
        venue: 'IT 4-3',
        startTime: '09:30',
        endTime: '10:20',
        type: 'Lecture 2',
      };
      this.wednesday[0] = {
        module: 'STK 320',
        venue: 'IT 4-3',
        startTime: '07:30',
        endTime: '08:20',
        type: 'Lecture 3',
      };
      this.wednesday[7] = {
        module: 'STK 320',
        venue: 'IT 4-3',
        startTime: '14:30',
        endTime: '15:20',
        type: 'Practical',
      };
      this.friday[6] = {
        module: 'STK 320',
        venue: 'IT 4-3',
        startTime: '13:30',
        endTime: '14:20',
        type: 'Tutorial',
      };
      return;
    }
    if (m == 'STK330') {
      return;
    }
    if (m == 'WST300') {
      this.monday[9] = {
        module: 'WST 300',
        venue: 'IT 4-1',
        startTime: '16:30',
        endTime: '17:20',
        type: 'Lecture 1',
      };
      this.tuesday[0] = {
        module: 'WST 300',
        venue: 'IT 4-1',
        startTime: '07:30',
        endTime: '08:20',
        type: 'Lecture 2',
      };
      this.wednesday[2] = {
        module: 'WST 300',
        venue: 'IT 4-1',
        startTime: '09:30',
        endTime: '10:20',
        type: 'Practical',
      };
      this.thursday[5] = {
        module: 'WST 300',
        venue: 'IT 4-1',
        startTime: '12:30',
        endTime: '13:20',
        type: 'Tutorial',
      };
      this.friday[2] = {
        module: 'WST 300',
        venue: 'IT 4-1',
        startTime: '09:30',
        endTime: '10:20',
        type: 'Tutorial',
      };
      this.friday[3] = {
        module: 'WST 300',
        venue: 'IT 4-1',
        startTime: '10:30',
        endTime: '11:20',
        type: 'Tutorial',
      };
      return;
    }
  }
  remove(m: any) {
    this.modules = this.modules.filter((item) => item !== m);
    // this.options.push(m);
    this.allOptions.push(m);
    if (m == 'COS301') {
      this.monday[3] = {};
      this.friday[7] = {};
      return;
    }
    if (m == 'COS330') {
      this.tuesday[7] = {};
      this.wednesday[3] = {};
      return;
    }
    if (m == 'COS333') {
      this.monday[2] = {};
      this.tuesday[1] = {};
      this.thursday[2] = {};
      this.thursday[4] = {};
      return;
    }
    if (m == 'COS341') {
      this.monday[0] = {};
      this.tuesday[5] = {};
      this.tuesday[6] = {};
      this.tuesday[9] = {};
      this.wednesday[6] = {};
      return;
    }
    if (m == 'COS332') {
      this.monday[1] = {};
      this.monday[6] = {};
      this.monday[7] = {};
      this.wednesday[1] = {};
      return;
    }
    if (m == 'COS310') {
      this.tuesday[8] = {};
      this.wednesday[4] = {};
      this.wednesday[5] = {};
      this.thursday[6] = {};
      this.thursday[7] = {};
      this.friday[0] = {};
      return;
    }
    if (m == 'IMY320') {
      this.monday[5] = {};
      this.thursday[0] = {};
      this.thursday[1] = {};
      this.thursday[3] = {};
      this.thursday[4] = {};
      this.friday[8] = {};
      return;
    }
    if (m == 'IMY310') {
      this.monday[4] = {};
      this.wednesday[8] = {};
      this.wednesday[9] = {};
      this.friday[4] = {};
      this.friday[5] = {};
      return;
    }
    if (m == 'COS310') {
      return;
    }
    if (m == 'STK320') {
      this.monday[8] = {};
      this.tuesday[2] = {};
      this.wednesday[0] = {};
      this.wednesday[7] = {};
      this.friday[6] = {};
      return;
    }
    if (m == 'STK330') {
      return;
    }
    if (m == 'WST300') {
      this.monday[9] = {};
      this.tuesday[0] = {};
      this.wednesday[2] = {};
      this.thursday[5] = {};
      this.friday[2] = {};
      this.friday[3] = {};
      return;
    }
  }

  onSubmit(){
    const roomName = (<HTMLInputElement>document.getElementById('roomName')).value;
    const roomDescription = (<HTMLInputElement>document.getElementById('roomDescription')).value;

    const newRoom = {
      id: this.chatrooms.length + 1,
      name: roomName,
      description: roomDescription,
      filename: this.selectedFileName,
      memo: this.hasMemo
    }

    this.chatrooms.push(newRoom);
    this.showPopup = false;
    this.moduleChat.messages.push([]);
  }

  toggleRequest() {
    this.request = !this.request;
  }

  SeeModule(i: number) {
    this.seenModules[i] = true;
  }

  getUsername(value: string) {
    this.username = value;
    console.log(this.username);
  }


}
