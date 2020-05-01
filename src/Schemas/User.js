import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  email: String,
  usernane: String,
  password: String,
  phone: String,
});

mongoose.model('Users', UserSchema);