import express from 'express'; 
const router = express.Router(); 

router.get('/users', (req, res) => { 
   res.send('Listado de usuarios'); 
  }); 

router.get('/users/:id', (req, res) => { 
      res.send(`Usuario con id ${req.params.id}`); 
  }); 
 
router.post('/users', (req, res) => { 
    res.send('Usuario creado'); 
}); 

export default router;