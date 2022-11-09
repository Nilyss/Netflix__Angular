export class User {
  email: string
  password: string
  phoneNumber: string
  profiles: [
    {
      nickname: string
      profilePicture: string
      isChild: number
      isAccountAdmin: number
    }
  ]

  constructor(
    email: string = '',
    password: string = '',
    phoneNumber: string = '',
    profiles: [
      {
        nickname: string
        profilePicture: string
        isChild: number
        isAccountAdmin: number
      }
    ]
  ) {
    this.email = email
    this.password = password
    this.phoneNumber = phoneNumber
    this.profiles = profiles
  }
}
