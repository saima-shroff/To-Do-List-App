const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type']
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;
