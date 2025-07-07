import express from 'express';
import * as Controller from '../controllers/roleController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// Rutas públicas
router.get('/', Controller.getRoles);
router.get('/:id', Controller.getRole);
router.get('/user/:userId', Controller.getRolesByUser);

// Rutas protegidas
router.post('/', authMiddleware, Controller.create);
router.put('/:id', authMiddleware, Controller.update);
router.delete('/:id', authMiddleware, Controller.remove);
router.post('/assign', authMiddleware, Controller.assign);

export default router;
