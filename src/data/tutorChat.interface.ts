export interface TutorChat {
  name: string,
  request:{
    from: string,
    date: Date,
    subject: string,
    description: string
  }
  messages: {
    from: string,
    date: Date,
    profilePicture: string,
    message: string
  }[]
}