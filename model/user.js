const { Schema, model } = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')

// regular expression

const isValidEmail = (email) => {
  const regexEmail =
    /^((\w[^\W]+)[\.\-]?){1,}\@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // RFC 5322 regex validation
  return regexEmail.test(email)
}

const isValidPassword = (password) => {
  const regexPassword =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^s]){8,16}$/ // 1 number, 1 uppercase letters, 1 lowercase letters, 1 non-alpha numeric number, between 8 and 16 characters with no space
  return regexPassword.test(password)
}

const userSchema = Schema({
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
    require: true,
    validate: [
      isValidPassword,
      "'Password must contain at least : 1 number, 1 uppercase letters, 1 lowercase letters, 1 non-alpha numeric number, between 8 and 16 characters with no space",
    ],
  },
})

userSchema.pre('save', async function (next) {
  const rounds = 10
  this.password = await bcrypt.hash(this.password, rounds)
  next()
})
userSchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator' })
module.exports = model('User', userSchema)
