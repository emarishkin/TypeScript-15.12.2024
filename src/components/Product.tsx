import { useState } from "react"
import { Iproduct } from "../models"

interface ProductProps{
    product:Iproduct
}


export function Product(props:ProductProps){
    const [datails,setDeteils]= useState(false)
    return(
        <div className="product">
          <img src={props.product.image} alt={props.product.title} />
          <h1>{props.product.title}</h1>
          <p>Цена:{props.product.price}$</p>
          <button className={!datails?'button':'button-active'} onClick={()=>setDeteils((prev)=>!prev)}>{datails? 'close description':'open description'}</button>
          <div>
            {datails && <p>{props.product.description}</p>}
          </div>
          
        </div>
    )
}