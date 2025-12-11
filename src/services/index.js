import express from 'express';
import cors from 'cors';

const app = express();

// Configuración básica: Permitir todos los orígenes 
app.use(cors()); 
// Configuración avanzada: Permitir dominios específicos 
const corsOptions = { 
// Dominios permitidos 
origin: ['https://example.com', 'https://anotherdomain.com'], 
// Métodos HTTP permitidos 
methods: ['GET', 'POST', 'PUT', 'DELETE'], 
// Encabezados permitidos 
allowedHeaders: ['Content-Type', 'Authorization'], 
credentials: true // Permitir cookies o credenciales 
}; 
app.use(cors(corsOptions)); 

app.get('/', (req, res) => { 
res.send('Hola, mundo desde Express!'); 
});

// Ruta de prueba
app.get('/ping', (req, res) => { 
res.send('/pong');
}); 

// Ruta que devuelve HTML
app.get('/bienvenida', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Página de Bienvenida</title>
      </head>
      <body>
        <h1>¡Bienvenido a mi aplicación con Express!</h1>
        <p>Esta es una respuesta en formato HTML.</p>
      </body>
    </html>
  `);
});

// Ruta que devuelve JSON
app.get('/usuarios', (req, res) => {
  const usuarios = [
    { id: 1, nombre: 'Ana', edad: 25 },
    { id: 2, nombre: 'Luis', edad: 30 },
    { id: 3, nombre: 'María', edad: 28 }
  ];
  res.json(usuarios);
});

app.get('/items/:id', (req, res) => { 
  const id = req.params.id; 
  const category = req.query.category; 
  const price = req.query.price; 

  res.send(`ID: ${id}, Categoría: ${category}, Precio: ${price}`);
});
 
app.post('/items/:id', (req, res) => { 
  const id = req.params.id; 
  const category = req.query.category; 
  const price = req.query.price; 

  res.send(`ID: ${id}, Categoría: ${category}, Precio: ${price}`);
});

app.put('/items/:id', (req, res) => { 
  const id = req.params.id; 
  const category = req.query.category; 
  const price = req.query.price; 

  res.send(`ID: ${id}, Categoría: ${category}, Precio: ${price}`);
});

app.delete('/items/:id', (req, res) => { 
  const id = req.params.id; 
  const category = req.query.category; 
  const price = req.query.price; 

  res.send(`ID: ${id}, Categoría: ${category}, Precio: ${price}`);
});

// Middleware para manejar errores 404 
app.use((req, res, next) => { 
res.status(404).send('Recurso no encontrado o ruta inválida'); 
}); 

const PORT = 3000; 
app.listen(PORT, () => { 
console.log(`Server running at http://localhost:${PORT}`); 
}); 
