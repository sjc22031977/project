import express from 'express'; 
const router = express.Router(); 

router.get('/categories', (req, res) => { 
   res.send('Listado de categorias'); 
  }); 

router.get('/categories/:id', (req, res) => { 
      res.send(`Categoria con id ${req.params.id}`); 
  }); 
 
router.post('/categories', (req, res) => { 
    res.send('Categoria creada'); 
}); 

export default router;