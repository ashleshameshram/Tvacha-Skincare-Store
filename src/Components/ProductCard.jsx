import { Link } from 'react-router-dom'
import './ProductCard.css'

export default function ProductCard({ product }){
    const handleAdd = () => {
        console.log("Add to Cart:" , product.name);
    }
    return(
        <article className='pcard'>
            <Link to={`/product/${product.id}`} className='pcard-link'>
                <div className='pcard-imgwrap'>
                    {product.badge && (
                        <span className={`pcard-badge pcard-badge-${product.badge.toLowerCase()}`}> 
                            {product.badge} 
                        </span>
                    )}
                    <img src={product.image} alt={product.name} className='pcard-img'></img>
                </div>
                <div className='pcard-info'>
                    <h3 className='pcard-name'>{product.name}</h3>
                    <p className='pcard-meta'>{product.ingredients[0]} · {product.category}</p>
                </div>
            </Link>

            <div className='pcard-footer'>
                <span className='pcard-price'>₹{product.price}</span>
                <button className='btn pcard__btn' onClick={handleAdd}>Add</button>
            </div>
        </article>
    )
}