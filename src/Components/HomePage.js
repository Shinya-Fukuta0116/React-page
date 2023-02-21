import React from 'react'
import './Header.css'
import Image from './img/couch.jpg'


const HomePage = () => {
  return (
    <main className='wrapper' id='top'>
      <ul className="product-list">
        <li>
          <a href="item1.html" />
          <img src={Image} alt='Image' />
          <p>プロダクトタイトルプロダクトタイトル<br />
            ¥99,999 +tax</p>
        </li>
        <li>
          <a href="item1.html" />
          <img src={Image} alt='Image' />
          <p>プロダクトタイトルプロダクトタイトル<br />
            ¥99,999 +tax</p>
        </li>
        <li>
          <a href="item1.html" />
          <img src={Image} alt='Image' />
          <p>プロダクトタイトルプロダクトタイトル<br />
            ¥99,999 +tax</p>
        </li>
        <li>
          <a href="item1.html" />
          <img src={Image} alt='Image' />
          <p>プロダクトタイトルプロダクトタイトル<br />
            ¥99,999 +tax</p>
        </li>
        <li>
          <a href="item1.html" />
          <img src={Image} alt='Image' />
          <p>プロダクトタイトルプロダクトタイトル<br />
            ¥99,999 +tax</p>
        </li>
        <li>
          <a href="item1.html" />
          <img src={Image} alt='Image' />
          <p>プロダクトタイトルプロダクトタイトル<br />
            ¥99,999 +tax</p>
        </li>
        <li>
          <a href="item1.html" />
          <img src={Image} alt='Image' />
          <p>プロダクトタイトルプロダクトタイトル<br />
            ¥99,999 +tax</p>
        </li>
        <li>
          <a href="item1.html" />
          <img src={Image} alt='Image' />
          <p>プロダクトタイトルプロダクトタイトル<br />
            ¥99,999 +tax</p>
        </li>
      </ul >
      <a className="link-text" href="products.html">View More</a>
    </main>
  )
}

export default HomePage
