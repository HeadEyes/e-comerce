import React from 'react'
import "./Filter.css"
import { useFetch } from '../../hooks/useFetch';
import SortIcon from '@mui/icons-material/Sort';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import { useFilters } from '../../hooks/useFilter';


export const Filter = () => {

    const { data, loading } = useFetch(`https://fakestoreapi.com/products/categories`);

    const { filters, setFilters } = useFilters()

    const handleCategory = (e) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            category: e.target.value
        }));
    }

    const handleSort = () => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            price: !filters.price
        }));
    }

    return (
        <section className='filter'>

            <div className='filter-category'>
                <select name="" id="filter-category__select" defaultValue={"default"} className='filter-category__select' onChange={(e) => handleCategory(e)}>
                    <option className='filter-category__option' value="all" >All</option>
                    {
                        data?.map((data, index) => (
                            <option className='filter-category__option' key={index} value={data}>{data}</option>
                        ))
                    }
                </select>
                <span className='select-arrow'><ArrowDropDownIcon /></span>
            </div>

            <div className='filter-sort'>
                <p>Sort by Price:</p>
                <span className='filter-sort__icon' onClick={() => { handleSort()}}>
                    <SortIcon style={filters.price ? { transform: "scaleY(-1)" } : null} />
                </span>
            </div>
        </section>
    )
}
