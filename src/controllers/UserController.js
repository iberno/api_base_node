import User from '../Schemas/User'
import { hash } from 'bcrypt';
 
class UserController {
  // List Users
  async index(req, res) {
    const users = await User.find();
    return res.json(users);
  }
  // Create user
  async create(req, res) {
    const { name, email, username, password, phone } = req.body;

    const passCrypt = await hash(password, 8);
    const user = await User.create({
      name, 
      email, 
      username,
      password: passCrypt, 
      phone
    });   
    
    return res.json(user)
  }
}

export default new UserController();