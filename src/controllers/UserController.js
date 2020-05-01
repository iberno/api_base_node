import User from '../Schemas/User'

class UserController {
  create(req, res) {
    const body = req.body;
    console.log(body);
    return res.send()
  }
}

export default new UserController();