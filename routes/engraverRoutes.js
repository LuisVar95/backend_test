import express from 'express'
import { obtenerRegistrosHoy } from '../controllers/engraverController.js';

const router = express.Router();

router.get('/engraver/actualdia', obtenerRegistrosHoy)

export default router;