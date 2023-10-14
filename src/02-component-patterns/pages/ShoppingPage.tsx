import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

import '../styles/custom-styles.css'

import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';



export const ShoppingPage = () => {

    const { shoppingCart ,onProductCountChange } = useShoppingCart();
    

    

  return (
    <div>
        <h1>ShoppingPage Store</h1>
        <hr />
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>

        {
            products.map( product => (
                <ProductCard 
                    product={ product } 
                    className="bg-dark text-white"
                    key={ product.id }
                //    onChange={ ( evento ) => onProductCountChange( evento ) }
                onChange={ onProductCountChange }
                value={ shoppingCart[product.id]?.count || 0 }
                >
                    <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2)' }} />
                    <ProductTitle className="text-white text bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>
            ))
        }
    
{ /*
          <ProductCard 
              product={ product } 
              style={{
                  backgroundColor: '#70D1F8'
              }}
          >
              <ProductImage style={{ boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2)' }}/>
              <ProductTitle style={{ fontWeight: 'bold' }}/>
              <ProductButtons style={{
                  display: 'flex',
                  justifyContent: 'end'
              }}/>
          </ProductCard>
*/}
        </div>

        {/*
            <inout
                value={ counter }
                onChange={ (e) => setCounter( e.target.value ) }
            />
        */}

        <div className="shopping-cart">

            {
                Object.entries( shoppingCart ).map( ([ key, product ]) => (
                    <ProductCard 
                        key={ key }
                        product={ product } 
                        className="bg-dark text-white"
                        style={{ width: '100px' }}
                        onChange={ onProductCountChange }
                        value={ product.count } // hay que cambiar tambien en useProducts
                    //    onChange={ () => onProductCountChange() } // de esta manera admite argumento
                    //    onChange={ onProductCountChange } // de esta manera no admite argumento
                    >
                        <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2)' }} />
                        <ProductTitle 
                            className="text-white text bold"
                         />
                        <ProductButtons 
                            className="custom-buttons" 
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        />
                    </ProductCard>

                ))
            }


        </div>

        <div>
        <code>
            {/*
             JSON.stringify( shoppingCart, null, 5 ) 
            */}
        </code>
        </div>


    </div>
  )
}
