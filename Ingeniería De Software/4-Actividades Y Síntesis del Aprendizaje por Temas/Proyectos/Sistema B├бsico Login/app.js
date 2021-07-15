const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// Limita las consultas de la misma dirección IP
const limiter = rateLimit({
  max: 50,
  windowMs: 60 * 60 * 1000,
  message:
    'Muchas consultas de esta dirección IP. Intente de nuevo en una hora',
});
app.use('/api', limiter);

// 2) RUTAS
app.use('/api/v1/usuarios', userRouter);

app.all('*', (req, res, next) => {
  next(
    new AppError(`No se puede encontrar ${req.originalUrl} en el servidor`, 400)
  );
});

app.use(globalErrorHandler);

module.exports = app;
