const { Schema, model } = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator') // check if the object is already in DB https://www.npmjs.com/package/mongoose-unique-validator
const bcrypt = require('bcrypt') // hach password package https://www.npmjs.com/package/bcrypt

// email & password validations

const isValidEmail = (email) => {
  const regexEmail =
    // RFC 5322 regex validation
    /^((\w\w+)[.\-]?)+@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regexEmail.test(email)
}

const isValidPassword = (password) => {
  const regexPassword =
    // Must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, at least 8 characters, Can contain special characters
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
  return regexPassword.test(password)
}

// Schema for user Model mongoose

const userSchema = Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
      validate: [isValidEmail, 'Please, indicate an valid mail address'],
    },
    password: {
      type: String,
      trim: true,
      require: true,
      validate: [
        isValidPassword,
        'Must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, at least 8 characters, Can contain special characters',
      ],
    },
    phoneNumber: {
      type: String,
      trim: true,
      default: '(+33)',
    },
    postalAddress: {
      type: [
        {
          firstName: String,
          lastName: String,
          address: String,
          apartment: String,
          city: String,
          stateProvince: String,
          country: String,
          zipPostalCode: Number,
        },
      ],
      default: {
        firstName: 'Rick',
        lastName: 'Deckard',
        address: '1898 Maud Street',
        apartment: '12 second floor',
        city: 'Philadelphia',
        StateProvince: 'Delaware',
        country: 'United-States',
        zipPostalCode: '19103',
      },
      require: true,
    },
    profiles: {
      type: [
        {
          nickname: String,
          profilePicture: String,
          isChild: Boolean,
          isAccountAdmin: Boolean,
        },
      ],
      default: {
        nickname: 'User 1',
        profilePicture: 'https://i.imgur.com/H39g1H4.png',
        isChild: false,
        isAccountAdmin: false,
      },
      require: true,
    },
    isWebsiteAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

// hash password before saving user in DB
userSchema.pre('save', async function (next) {
  const rounds = 10
  this.password = await bcrypt.hash(this.password, rounds)
  next()
})

userSchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator' })
module.exports = model('User', userSchema)
