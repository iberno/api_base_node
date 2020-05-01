import express from 'express';

class App {  
 constructor() {
  this.server = express();
 }

// app.get('/', (req, res) => {
//   return res.send('Mensagem: Minha API');
// });

}

export default new App().server;