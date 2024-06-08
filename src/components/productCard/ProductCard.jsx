import React from 'react'
import "./ProductCard.css"
import { Link } from 'react-router-dom'
import { StarRating } from '../StarRating/StarRating.jsx'

export const ProductCard = ({ product }) => {
    return (
        <li className='product__item' key={product.id}>
            <Link className='product__link' to={`/product/${product.id}`}>
                <span className='product-card__img'>
                    <img className='' src={product.image} alt={product.title} />
                </span>
                <div className='product-card__info'>
                    <h1 className='product-card__title'>{product.title}</h1>
                    <ul className='product-card__rating' ><StarRating rating={product.rating.rate} /> </ul>
                    <h2 className='product-card__price'> $ {product.price}</h2>
                </div>
            </Link>
        </li>
    )
}
