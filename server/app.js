//ENV
require('dotenv').config()

//EXPRESS
const express = require('express');
const app = express();

//CONTROLLERS
const log = require('./controllers/logcontroller');
const user = require('./controllers/usercontroller');

//DATABASE
const sequelize = require('./db');
sequelize.sync();
app.use(express.json());
app.use(require('./middleware/headers'));

//LISTEN
app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));

//ROUTES
app.use('/user', user);
app.use(require('./middleware/validate-session'));
app.use('/log', log);