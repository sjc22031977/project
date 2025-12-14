import express from 'express'; 
import cors from 'cors'; 
import bodyParser from 'body-parser';
import productsRouter from './src/routes/products.routes.js'; 
import authRouter from './src/routes/auth.routes.js'; 

const app = express(); 

// Configuración básica: Permitir todos los orígenes 
app.use(cors()); 

app.use(bodyParser.json()); 

// Aquí irían las rutas 
app.use('/api', productsRouter); 
app.use('/api', categoriesRouter);
app.use('/api', usersRouter); 
app.use('/auth', authRouter); 

// Middleware para manejar errores 404 
app.use((req, res, next) => { 
  res.status(404).send('Recurso no encontrado'); 
}); 

const PORT = 3000; 

app.listen(PORT, () => console.log(`http://localhost:${PORT}`)); 