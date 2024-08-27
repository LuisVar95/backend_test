import express from 'express'
import { obtenerRegistrosHoy } from '../controllers/biseladoController.js';

const router = express.Router();

router.get('/biselado/actualdia', obtenerRegistrosHoy)

export default router;