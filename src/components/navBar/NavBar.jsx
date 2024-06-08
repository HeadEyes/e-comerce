import { React, useState, useContext, use } from 'react';
import "./NavBar.css";
import { useFetch } from '../../hooks/useFetch.js';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { CartContext } from '../../context/cartContext';
import { Cart } from '../Cart/Cart.jsx';

export const NavBar = () => {

  const { data } = useFetch(`https://fakestoreapi.com/products`)

  const { showCart, setShowCart, cart } = useContext(CartContext);

  const [showMenu, setShowMenu] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [showSearch, setShowSearch] = useState(false)


  return (
    <header className='header'>
      <div className='navBar'>

        <div className='navBar__menu-icon' onClick={() => setShowMenu(true)}>
          <MenuIcon />
        </div>

        <section className={`menu ${showMenu ? 'show' : ''}`} onClick={() => setShowMenu(false)} >
          <ul className='menu__list' onClick={(e) => e.stopPropagation()}>

            <li className='menu__list-item'>
              <Link className='list-item__name' to={"/"}>Home</Link>
            </li>

            <li className='menu__list-item'>
              <Link className='list-item__name' to={"/products"}>Products</Link>
            </li>

            <li className='menu__list-item'>
              <Link className='list-item__name' to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </section>

        <section className='search-bar'>
          <SearchIcon className='search-bar__icon' />
          <input type="text" className='search-bar__input'
            onChange={(e) => setSearchValue(e.target.value.toLowerCase())} placeholder='Search'
            onFocus={() => setShowSearch(true)}
            onBlur={() => setTimeout(() => {
              setShowSearch(false)
            }, 100)}
          />

          {(showSearch && searchValue.length >= 1) &&
            <ul className='search-list'>
              {
                data?.filter(product => product.title.toLowerCase().includes(searchValue))
                  .map((result) => (

                    <li className='search-list__item' key={result.id}>
                      <Link className='search-list__link' onClick={() => setShowSearch(false)} to={`/product/${result.id}`}>
                        <span className='search-list__text'>{result.title}</span>
                      </Link>
                    </li>

                  ))
              }
            </ul>
          }

        </section>

        <section className='user-section' onClick={() => setShowCart(true)}>
          <div className='shopping-cart__icon'>
            <ShoppingCartIcon />
            {
              cart.length >= 1 ?
                <span className='shopping-cart__count'>
                  {cart.length}
                </span>
                :
                null
            }
          </div>
          <Cart />
        </section>
      </div>
    </header>
  )
}
