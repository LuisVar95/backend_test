import express from 'express'
import { obtenerRegistrosHoy } from '../controllers/manualController.js';

const router = express.Router();

router.get('/manual/actualdia', obtenerRegistrosHoy)

export default router;