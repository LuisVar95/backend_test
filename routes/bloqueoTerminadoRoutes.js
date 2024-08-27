import express from 'express'
import { obtenerRegistrosHoy } from '../controllers/bloqueoTerminadoController.js';

const router = express.Router();

router.get('/terminado/actualdia', obtenerRegistrosHoy)

export default router;