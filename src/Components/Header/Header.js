import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './../../hooks/useAuth'
import useAuth from './../../hooks/useAuth';

const Header = () => {
  const {user,logOut} = useAuth();
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid">
<a className="navbar-brand" >Travel Guru</a>



<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav">
<li className="nav-item">
  {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
  <NavLink as={HashLink} to="/home" className="nav-link active">Home</NavLink>
</li>
<li className="nav-item">
  {/* <a className="nav-link active" >Services</a> */}
  <NavLink as={HashLink} to="/services" className="nav-link active">Services</NavLink>
</li>
<li className="nav-item">
  {/* <a className="nav-link active" href="#">About Us</a> */}
  <NavLink as={HashLink} to="/about" className="nav-link active">About Us</NavLink>
</li>

<li className="nav-item">

  {
    user?.email?
    
    <li className="nav-item d-flex">
      <NavLink  to="/myorder"  className="nav-link active">My Orders</NavLink>
      <NavLink  to="/manageOrder"  className="nav-link active">ManageOrders</NavLink>
      <NavLink  to="/add"  className="nav-link active">AddService</NavLink>
      {/* <button onClick={logOut}>log out</button> */}
      <NavLink  to="/login" onClick={logOut}  className="nav-link active">Logout</NavLink>
      
    </li>
    :
    <NavLink  to="/login"   className="nav-link active">Login</NavLink>
  }
</li>

  



{/* {user.email && <span className="text-light">Hello {user?.displayName}</span>} */}




</ul>
</div>
</div>
</nav>
</div>
   
    );
};

export default Header;