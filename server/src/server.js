const express = require('express');
const morgan = require('morgan');
const Mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const authRouter = require('./routes/auth-router');
const userRouter = require('./routes/user-router');
const typeRouter = require('./routes/type-router');
const materialRouter = require('./routes/material-router');
const stoneRouter = require('./routes/stone-router');
const colorRouter = require('./routes/color-router');
const jewelryRouter = require('./routes/jewelry-router');

const server = express();
const { PUBLIC_PATH, IMG_FOLDER_NAME, SERVER_PORT, DB_CONNECTION, SERVER_DOMAIN, CLIENT_PORT } = process.env;
const corsOptions = {
  origin: `${SERVER_DOMAIN}:${CLIENT_PORT}`,
  optionsSuccessStatus: 200,
};
// Middlewares
server.use(morgan('tiny'));
server.use(cors(corsOptions));
server.use(express.json());
server.use(express.static(`${PUBLIC_PATH}/${IMG_FOLDER_NAME}`));

// Response handlers
server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
server.use('/types', typeRouter);
server.use('/materials', materialRouter);
server.use('/stones', stoneRouter);
server.use('/colors', colorRouter);
server.use('/jewelries', jewelryRouter);

server.listen(SERVER_PORT, () => {
  console.log(`puslapis veikia ant ${SERVER_DOMAIN}:${SERVER_PORT}/`);
  (async () => {
    try {
      await Mongoose.connect(DB_CONNECTION);
      console.log('Pavyko prisijungti prie duomenų bazės');
    } catch (error) {
      console.error('Nepavyko prisijungti prie duomenų bazės');
    }
  })();
});
