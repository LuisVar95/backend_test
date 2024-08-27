import express from 'express'
import { obtenerRegistrosHoy } from '../controllers/registroController.js';

const router = express.Router();

router.get('/generadores/actualdia', obtenerRegistrosHoy)

export default router;