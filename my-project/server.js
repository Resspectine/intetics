/*
 * Инициализация Express
 */
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const crypto = require('crypto');
const algorithm = 'aes-256-gcm';
const password = 'dHEnkskdkHDHEY63802KDrjf83Jfr503';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname)));

const db = require('diskdb');
db.connect('database', ['users','classes']);

function encrypt(text){
  let cipher = crypto.createCipher(algorithm,password)
  let crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}

function decrypt(text){
  let decipher = crypto.createDecipher(algorithm,password)
  let dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}
app.post('/signup', (req, res) => {
  if(!db.users.findOne({email: req.body.email})) {
    let id = encrypt(req.body.email);
    req.body.id = id;
    db.users.save(req.body);
    console.log("User saved");
    res.json(id);
  } else {
    res.status(400).json("Email is taken");
  }
});
app.post('/editprofile', (req, res) => {
  let user = db.users.findOne({id: req.body.id});
  if(user) {
    let userJSON = user;
    userJSON.faculty = req.body.faculty;
    userJSON.group = req.body.group;
    userJSON.status = req.body.status;
    userJSON.course = req.body.course;
    let update = db.users.update(req.body,userJSON,{multi: false});
    res.json("done");
  } else {

  }
});
app.post('/user', (req, res) => {
  let user = db.users.findOne({id: req.body.id})
  if(user) {
    res.json(user);
  } else {
    console.log("no such user");
    res.status(400).end();
  }
});
/*
 * Запуск приложения
 */
const port = 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});
