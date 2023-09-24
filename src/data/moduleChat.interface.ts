export interface ModuleChat {
  module: string,
  tutors: {
    name: string,
    profilePicture: string
  }[],
  classmates:{
    name: string,
    profilePicture: string,
  }[],
  messages:{
    from: string,
    date: Date,
    profilePicture: string,
    message: string
  }[]
}