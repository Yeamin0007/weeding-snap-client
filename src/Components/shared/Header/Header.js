import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Link } from 'react-router-dom';

const Header = () => {

  const{user, logOut}= useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.error(error));
}
const menuItems = <>
<li><Link to='/'>Home</Link></li>
<li><Link to='/blogs'>Blog</Link></li>
{
    user?.email ?
        <>
            <li><Link to='/addServices'>Add Service</Link></li>
            <li><Link to='/myReviews'>My Reviews</Link></li>
        </>
        :
        <></>
}
</>

const menuSignInOut = <>
{
    user?.email ?
        <button onClick={handleLogOut} className="btn btn-accent">Logout</button>
        :
        <Link to='/login'><button className="btn btn-accent">Login</button></Link>
}
</>

    return (
        <div className="navbar bg-black px-5  ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
        {
          menuItems
        }
         </ul>
    </div>
    <img  className= 'h-20 w-25 rounded-2xl' src='https://png.pngtree.com/png-clipart/20200224/original/pngtree-digital-dslr-camera-icon-logo-symbol-vector-design-png-image_5208933.jpg' alt=''></img>
    <Link className='btn btn-ghost normal-case text-xl text-accent' to='/'>
    Wed-Snap
    </Link>
  </div>

  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal p-0 text-accent">
      {
        menuItems
      }
    </ul>
  </div>
  
  <div className="navbar-end">
    {
      menuSignInOut
    }
  </div>
</div>
    );
};

export default Header;