import React from 'react'
import "./ProductList.css"
import { useFetch } from '../../hooks/useFetch';
import { ProductCard } from '../../components/productCard/ProductCard';
import { Filter } from '../../components/Filter/Filter';
import { Loader } from '../../components/Loader/Loader.jsx';
import { useFilters } from '../../hooks/useFilter.js';

export const ProductList = () => {
    
    const { filterProducts } = useFilters();
    const { data, loading } = useFetch(`https://fakestoreapi.com/products`);
    const filteredProduct = filterProducts(data)


    return (
        <main className='main-productList'>

            <Filter />

            <section className='product-list__container'>

                <ul className='product-list'>
                    {loading ?
                        <Loader/> :
                        filteredProduct?.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </ul>

            </section>
        </main>
    )
}
