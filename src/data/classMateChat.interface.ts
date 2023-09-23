export interface ClassmateChat{
  name: string,
  profilePicture: string,
  messages: {
    from: string,
    date: Date,
    profilePicture: string,
    message: string
  }[]
}