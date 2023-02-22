const express = require('express')
const app = express()
var cors = require('cors');
const port = 3000
//const hbs = require('hbs')
const path = require('path')
const rutasFront = require('./routes/front')
const rutasBack = require('./routes/back')
const bodyParser = require("body-parser");
//const session = require('express-session')
//require ('./views/helpers/helpers.js')
//require('dotenv').config()

const db = require("./models/index");
const Product = require('./models/product')


/* app.set('view engine', 'hbs')
app.set('views',
[path.join('./views/front'),
path.join('./views/back'),
path.join('./views')
]) */

//hbs.registerPartials(__dirname + '/views/partials', function (err) {})


/* app.use(session({
  secret: 'sarasa',
  resave: true,
  saveUninitialized: false,
  cookie: { maxAge: 300000 }
})) */

app.use(express.static('public'))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use('/', rutasFront)
app.use('/', rutasBack)


app.use((req, res, next)=>{
  res.status(404).render('404')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})