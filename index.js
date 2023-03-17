require('dotenv').config();
const express = require('express');
const cors = require('cors');

const routerApi = require('./routes');

const {
  logErrors,
  errorHandler,
  boomErrorHandler
} = require('./middlewares/error.handler');

const app = express();

const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

const whiteList = ['https://localhost:3000'];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Origin not allowed'))
    }
  }
}
app.use(cors(options))

// Routes
app.get('/home', (req, res) => {
  res.send('Task Manager')
})

routerApi(app);

// Middlewares
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
