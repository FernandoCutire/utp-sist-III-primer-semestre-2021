const User = require('../models/userModel');
const factory = require('./handlerFactory');

// TODO

exports.getUser = factory.getOne(User);

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Esta ruta no está definida, use la ruta /registro',
  });
};

exports.updateUser = factory.updateOne(User);

exports.deleteUser = factory.deleteOne(User);
