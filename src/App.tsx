import { Product } from "./components/Product"
import { products } from "./data/products"


export function App(){


    
    return(
        <div className="container">
            {products.map((product)=>{
                return <Product key={product.title} product={product}/>
            })}
        </div>
    )
}