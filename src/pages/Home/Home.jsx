import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const img = "/assets/banner.jpg"

export const Home = () => {
  return (
    <main className='main-home'>
      <section className='banner'>
        <div className='banner__img'>
          <img src={img} alt="banner-img" />
        </div>
        <div className='banner__info'>
          <div className='banner__info-container'>
            <p className='banner__info-title'>All what you need in only one place</p>
            <Link to={"/Products"}>Start shooping</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
