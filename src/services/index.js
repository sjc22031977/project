import express from 'express'; 
import cors from 'cors'; 
import productsRouter from './src/routes/products.routes.js'; 

const app = express(); 

// Configuración básica: Permitir todos los orígenes 
app.use(cors()); 

// Aquí irían las rutas 
app.use('/api', productsRouter); 
app.use('/api', categoriesRouter);
app.use('/api', usersRouter); 

// Middleware para manejar errores 404 
app.use((req, res, next) => { 
  res.status(404).send('Recurso no encontrado'); 
}); 

const PORT = 3000; 

app.listen(PORT, () => console.log(`http://localhost:${PORT}`)); 