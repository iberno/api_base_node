import { verify } from 'jsonwebtoken';

export default async(req, res, next) => {
  const authHeader = req.headers.authorization;

  if(!authHeader) {
    return res.status(401).json({ error: "User not authorized!" });
  }

  // Bearer jwt token
  const [, token] = authHeader.split(" ");

  try {
    const decoded = verify(token, "cbd1e68175661ba9c41a5cb0f650798");
    console.log(decoded);
    
    return next();
  } catch(err) {    
    return res.status(401).json({ error: 'Invalid jwt Token'})
  }
}