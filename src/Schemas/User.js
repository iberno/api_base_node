import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  email: String,
  usernane: String,
  password: String,
  phone: String,
});

export default mongoose.model('User', UserSchema);