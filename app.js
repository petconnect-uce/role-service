import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import roleRoutes from './routes/roleRoutes.js';
import { initTables } from './models/roleModel.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/roles', roleRoutes);

initTables().then(() => {
  console.log('✅ Tablas inicializadas en role_service_db');
});

app.listen(process.env.PORT, () =>
  console.log(`🚀 Role Service corriendo en puerto ${process.env.PORT}`)
);
