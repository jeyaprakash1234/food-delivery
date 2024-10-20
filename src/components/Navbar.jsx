import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import {Link} from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu]=useState('home')
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo2} alt="" /> </Link>
      <ul className="navbar-menu">
        <Link to='/' onCack={()=>setMenu('home')}className={menu==='home'?'active':''}>Home</Link>
        <a href='#explore-menu' onCack={()=>setMenu('menu')}className={menu==='menu'?'active':''}>menu</a>
        <a href='#app-download' onCack={()=>setMenu('mobile-app')}className={menu==='mobile-app'?'active':''}>Mobile-App</a>
        <a href='#footer' onCack={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':''}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
         <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link> 
          <div className={getTotalCartAmount()===0?"":"dot"}></div>

        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>


      </div>
    </div>
  )
}

export default Navbar
