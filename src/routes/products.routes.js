// products.routes.js 
import express from 'express'; 
const router = express.Router(); 

import { 
getAllProducts, 
getProductById, 
createProduct 
} from '../controllers/products.controller'; 

router.get('/products', getAllProducts); 

router.get('/products/:id', getProductById); 

router.post('/products', createProduct); 

router.get('/products', authentication, getAllProducts); 
router.get('/products/:id', authentication, getProductById); 
router.post('/products', authentication, createProduct); 

export default router; 