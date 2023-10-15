import { ReactElement, createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { InitialValues, Product, ProductCardHandlers, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface Props {
    product: Product;
    //children?: ReactElement | ReactElement[];
    children: ( args: ProductCardHandlers ) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}


export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {


    // TODO: custom hook
    const { counter, increaseBy, maxCount, isMaxCountReached, reset } 
        = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter,
            increaseBy,
            maxCount,
            product
        }}>
            <div 
                className={ `${ styles.productCard } ${ className }` }
                style={ style }
            >
                { 
                    children({
                        count: counter,
                        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
                        maxCount: initialValues?.maxCount,
                        product,

                        increaseBy,
                        reset,
                    }) 
                }
            </div>
        </Provider>
    )
}