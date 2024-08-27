import express from 'express'
import { obtenerRegistrosHoy } from '../controllers/pulidoController.js';

const router = express.Router();

router.get('/pulido/actualdia', obtenerRegistrosHoy)

export default router;