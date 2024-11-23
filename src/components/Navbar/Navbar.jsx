import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';  // Ensure you're using 'Link' from react-router-dom

const Navbar = () => {
  const [menu, setMenu] = useState('home');

  const handleScrollToStores = () => {
    // Scroll to the element with id "sales-office"
    const salesOfficeSection = document.getElementById('sales-office');
    if (salesOfficeSection) {
      salesOfficeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='navbar'>
      {/* Logo */}
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>

      {/* Navigation Menu */}
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>home</Link>
        <a href="#" onClick={handleScrollToStores} className={menu === 'stores' ? 'active' : ''}>stores</a> {/* Updated to call handleScrollToStores */}
        <Link to='/who-we-are' onClick={() => setMenu('who-we-are')} className={menu === 'who-we-are' ? 'active' : ''}>who we are</Link>
       
        <Link
          to="/products"
          onClick={() => setMenu('products')}
          className={menu === 'products' ? 'active' : ''}
        >
          products
        </Link>
        <a href='#footer' onClick={() => setMenu('contact us')} className={menu === 'contact us' ? 'active' : ''}>contact us</a>
        <Link to="/join-us">join us</Link>
      </ul>
    </div>
  );
};

export default Navbar;
