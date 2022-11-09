export class User {
  _id: string
  email: string
  password: string
  phoneNumber: string
  profiles: [
    {
      _id: string
      nickname: string
      profilePicture: string
      isChild: boolean
      isAccountAdmin: boolean
    }
  ]
  postalAddress: [
    {
      firstName: string
      lastName: string
      address: string
      apartment: string
      city: string
      stateProvince: string
      country: string
      zipPostalCode: number
    }
  ]
  isWebsiteAdmin: boolean

  constructor(
    _id: string,
    email: string = '',
    password: string = '',
    phoneNumber: string = '',
    profiles: [
      {
        _id: string
        nickname: string
        profilePicture: string
        isChild: boolean
        isAccountAdmin: boolean
      }
    ],
    postalAddress: [
      {
        firstName: string
        lastName: string
        address: string
        apartment: string
        city: string
        stateProvince: string
        country: string
        zipPostalCode: number
      }
    ],
    isWebsiteAdmin: boolean
  ) {
    this._id = _id
    this.email = email
    this.password = password
    this.phoneNumber = phoneNumber
    this.profiles = profiles
    this.postalAddress = postalAddress
    this.isWebsiteAdmin = isWebsiteAdmin
  }
}
