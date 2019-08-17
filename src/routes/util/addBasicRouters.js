import { body, sanitizeParam, param } from 'express-validator';
import validate from 'routes/middlewares/verifyInput';

export default function (router, controller, model, options = {}) {
  const { methods } = options;

  if (!methods || methods.includes('getAll')) {
    router.get('/', async (req, res, next) => {
      try {
        const instances = await controller.getAll();
        return res.status(200).send(instances);
      } catch (e) {
        return next(e);
      }
    });
  }

  if (!methods || methods.includes('getById')) {
    router.get(
      '/:id(\\d+)/',
      validate([sanitizeParam('id').toInt(), param('id').custom(id => model.verifyPk(id))]),
      async (req, res, next) => {
        try {
          const { id } = req.params;
          const instance = await controller.getById(id);
          return res.status(200).send(instance);
        } catch (e) {
          return next(e);
        }
      },
    );
  }

  if (!methods || methods.includes('create')) {
    router.post(
      '/',
      validate([body().custom(values => model.validate(values))]),
      async (req, res, next) => {
        try {
          const instance = await controller.create(req.body);
          return res.status(201).send(instance);
        } catch (e) {
          return next(e);
        }
      },
    );
  }

  if (!methods || methods.includes('update')) {
    router.patch('/:id', async (req, res, next) => {
      try {
        const instance = await controller.update(req.params.id, req.body);
        return res.status(200).send(instance);
      } catch (e) {
        return next(e);
      }
    });
  }

  if (!methods || methods.includes('remove')) {
    router.delete('/:id', async (req, res, next) => {
      try {
        const instance = await controller.remove(req.params.id);
        return res.status(200).send(instance);
      } catch (e) {
        return next(e);
      }
    });
  }
}
