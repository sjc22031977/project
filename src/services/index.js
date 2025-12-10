import express from 'express';

const app = express();

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

const PORT = 3000; 
app.listen(PORT, () => { 
console.log(`Server running at http://localhost:${PORT}`); 
}); 
