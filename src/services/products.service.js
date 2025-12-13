 // products.service.js 
  import * as productService from "../models/products.model.js"; 
 
  export const getAllProducts = () => { 
     return productService.getAllProducts(); 
  }; 
 
  export const getProductById = async (id) => { 
    return productService.getProductById(id); 
  }; 
 
  export const createProduct = async (productData) => { 
    const { name, price } = productData;
    return productService.saveProduct(name, price); 
}; 
export const deleteProduct = async (id) => { 
return productService.deleteProduct(id); 
}; 

  export const applyDiscountToCategory = (category, discount) => { 
      const products = Product.getAllProducts(); 
      const discountedProducts = products.map(product => { 
        if (product.category === category) { 
          return { ...product, price: product.price * (1 - discount) }; 
        } 
        return product; 
      }); 
      return discountedProducts; 
  }; 

  
  export const getProductWithUser = (productId, userId) => { 
    const product = Product.getProductById(productId); 
    const user = User.getUserById(userId); 
    return { product, user }; 
  }; 

  export const deleteProductIfAllowed = (productId, userId) => { 
    const user = User.getUserById(userId); 
    if (user.role === 'admin') { 
      return Product.deleteProduct(productId); 
    } else { 
      throw new Error('Unauthorized'); 
    } 
  }; 