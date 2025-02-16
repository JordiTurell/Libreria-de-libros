import express from 'express';
import cors from 'cors';
import sequelize from './database';
import librosRoutes from './routes/librosRoutes';
import usuarioRoutes from './routes/usuarioRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());

// Rutas
app.use('/api', librosRoutes);
app.use('/api/auth', usuarioRoutes);

// Iniciar servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
});