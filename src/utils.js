import products from './components/itemList/products'


export const getProducts = ()=>{
  let productsObtained =   new Promise((res) => {
        setTimeout(() => {
          res(products);
        }, 1500);
      })

      
return productsObtained

} 


