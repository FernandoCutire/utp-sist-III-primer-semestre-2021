const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

// Implementando CRUD

// Crea nuevo
exports.createOne = (Model) => {
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });
};

// Obtiene una entidad
exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;

    if (!doc) {
      return next(
        new AppError('No se encontró un documento con ese identificador', 404)
      );
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

// Obtiene todos los objetos que pertenecen a una entidad

// Modifica una entidad
exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(
        new AppError('No se encontró un documento con ese identificador', 404)
      );
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

// Elimina una entidad
exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(
        new AppError('No se encontró un documento con ese identificador', 404)
      );
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  });
