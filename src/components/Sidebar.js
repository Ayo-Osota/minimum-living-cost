import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { FaTimes } from 'react-icons/fa';
import { links } from '../utils/constants';
import styled from 'styled-components';
import CartButtons from './CartButtons';
import { useUserContext } from '../context/user_context';

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useProductsContext();
  
  return <SidebarContainer>
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="ComfySloth" className='logo' />
        <button type='button' className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, text, url } = link;
          return <li key={id}><Link onClick={closeSidebar} to={url}>{text}</Link></li>
        })}
        <li><Link onClick={closeSidebar} to="/checkout">checkout</Link></li>
      </ul>
      <CartButtons />
    </aside>
  </SidebarContainer>
}

export default Sidebar;
