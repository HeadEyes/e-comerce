import { React, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { StarRating } from '../../components/StarRating/StarRating.jsx';
import { CartContext } from '../../context/cartContext.jsx';
import "./ProductPage.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Loader } from '../../components/Loader/Loader.jsx';


export const ProductPage = () => {

    const { id } = useParams();
    const { data, loading } = useFetch(`https://fakestoreapi.com/products/${id}`)
    const [quantity, setQuantity] = useState(1);

    const { addToCart } = useContext(CartContext)

    return (
        <main className='main-product'>
            {
                loading ?
                    <Loader/>
                    :
                    <section className='product-container'>
                        <div className='product-img'>
                            <img src={data.image} alt={data.title} />
                        </div>
                        <div className='product-detail'>

                            <div className='product-info'>
                                <h1 className='product-info__title'>{data.title}</h1>
                                <p className='product-info__desc'>{data.description}</p>
                                <ul className='product-info__rating'> <StarRating rating={data.rating.rate} size={"20px"} /></ul>
                                <p className='product-info__price'>$ {data.price}</p>
                            </div>

                            <div className='product-add'>
                                <div className="product-add__quantity">
                                    <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}><RemoveIcon /></button>
                                    <span className='quantity'>
                                        {quantity}
                                    </span>
                                    <button onClick={() => setQuantity((prev) => prev + 1)}><AddIcon /></button>
                                </div>
                                <button className='product-add__cart-button' onClick={() => addToCart({ data, quantity })} >Add to cart</button>
                            </div>
                        </div>
                    </section>
            }
        </main>
    )
}
