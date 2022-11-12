import express from 'express';
import { converter } from '../controllers/converter.js';
const router = express.Router();

router.get('/', converter);

export default router;
