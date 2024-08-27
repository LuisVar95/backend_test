import express from 'express'
import { obtenerRegistrosHoy } from '../controllers/bloqueoTalladoController.js';

const router = express.Router();

router.get('/tallado/actualdia', obtenerRegistrosHoy)

export default router;