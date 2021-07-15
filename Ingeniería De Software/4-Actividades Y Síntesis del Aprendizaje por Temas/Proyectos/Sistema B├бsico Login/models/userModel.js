const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Coloque un nombre de usuario'],
  },
  email: {
    type: String,
    required: [true, 'Coloque un correo electrónico'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Coloque un correo electrónico'],
  },
  photo: String,
  role: {
    type: String,
    enum: ['usuario', 'ingeniero', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'Inserte una contraseña'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Por favor confirme su contraseña'],
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
