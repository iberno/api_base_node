import { sign } from 'jsonwebtoken';
import User from '../Schemas/User';
import { compare } from 'bcrypt';

class SessionController {
  async create(req, res) {
    const { username, password } = req.body;

    //checking
    const user = await User.findOne({
      username
    });
    
    if(!user) {
      return res
        .status(404)
        .json({error: "User not found!"})
    }

    const matchPwd = await compare(password, user.password);

    if(!matchPwd) {
        return res
          .status(404)
          .json({error: "Incorrect Password or Username"});
    }

    const token = sign({}, "cbd1e68175661ba9c41a5cb0f6507987", {
      subject: new String(user._id),
      expiresIn: '1d'
    });

    return res.json({
      token,
      user,
    });
  }
}

export default new SessionController();