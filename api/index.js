// require('dotenv').config();
const express = require('express');
const cors = require('cors');

const routerApi = require('./routes');

const {
  logErrors,
  errorHandler,
  ormErrorHandler,
  boomErrorHandler
} = require('./middlewares/error.handler');

const app = express();

const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

const whiteList = ['http://localhost:3000','http://localhost:4000'];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Origin not allowed'))
    }
  }
}
app.use(cors(options))

// Routes
app.get('/api/', (req, res) => {
  res.send('Task Manager - API REST')
})

routerApi(app);

// Middlewares
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
