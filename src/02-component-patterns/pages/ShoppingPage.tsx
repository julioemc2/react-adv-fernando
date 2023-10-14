import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css'
import { useState } from 'react';

const product1 = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'Coffee Mug - Meme',
    img: './coffee-mug2.png'
  }

const products: Product[] = [ product1, product2];

interface ProductInCart extends Product {
    count: number
}


export const ShoppingPage = () => {


    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: {count:number, product: Product }) => {
    //    console.log('onProductCountChange', count, product );
        setShoppingCart( oldShoppingCart => {

            if ( count === 0 ) {

                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                console.log({ toDelete });
                
                return { ...rest }
            }

            return {
                ...oldShoppingCart,
                [ product.id ]: { ...product, count }
            }
        })
        
    }

    

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
