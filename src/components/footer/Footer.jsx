import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'


export const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <footer className='footer'>

      <div className='footer__back' onClick={scrollToTop}>
        Back to top
      </div>

      <section className='footer-info__container'>

        <div className='footer-info'>
          <h4 className='footer-info__title' >About us</h4>
          <ul className='footer-info__list'>
            <li className='footer-info__list-item'>
              Careers
            </li>
            <li className='footer-info__list-item'>
              Blog
            </li>
            <li className='footer-info__list-item'>
              Company information
            </li>
            <li className='footer-info__list-item'>
              Investor relations
            </li>
          </ul>
        </div>

        <div className='footer-info'>
          <h4 className='footer-info__title' >Customer service</h4>
          <ul className='footer-info__list'>
            <li className='footer-info__list-item'>
              Order status
            </li>
            <li className='footer-info__list-item'>
              Warranty services
            </li>
            <li className='footer-info__list-item'>
              Accessibility
            </li>
            <li className='footer-info__list-item'>
              Returns policy
            </li>
            <li className='footer-info__list-item'>
              Shipping
            </li>
          </ul>
        </div>

        <div className='footer-info'>
          <h4 className='footer-info__title' >Locations and services</h4>
          <ul className='footer-info__list'>
            <li className='footer-info__list-item'>
              Find Us
            </li>
            <li className='footer-info__list-item'>
              Upcoming locations
            </li>
            <li className='footer-info__list-item'>
              Hours and Holiday Closures
            </li>
          </ul>
        </div>
      </section>

      <section className='footer-social'>
        <Link  to={"https://www.facebook.com"} className='footer-social__icon'>
          <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="" />
        </Link>
        <Link to={"https://www.instagram.com"} className='footer-social__icon'>
          <img src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000" alt="" />
        </Link>
        <Link to={"https://www.twitter.com"} className='footer-social__icon'>
          <img src="https://img.icons8.com/?size=100&id=13963&format=png&color=000000" alt="" />
        </Link>
      </section>
    </footer>
  )
}
