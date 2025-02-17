import express from 'express';
import cors from 'cors';
import sequelize from './database';
import librosRoutes from './routes/librosRoutes';
import usuarioRoutes from './routes/usuarioRoutes';
import categoriasRoutes from './routes/categoriasRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());

// Rutas
app.use('/api', librosRoutes);
app.use('/api/auth', usuarioRoutes);
app.use('/api', categoriasRoutes);

// Iniciar servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
});