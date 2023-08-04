import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleHome = () => {
    navigate('/');
  };

  const handleDropdownToggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-white fixed-top" style={{ background: "white", boxShadow: "0px 1px 21px 0px", height: "4.8rem", width: "95rem" }}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
            <li>
              <button onClick={handleHome} id="homelogo-btn">
                <img src="/images/Logo1.png" alt="Logo" id="pagelogo" />
              </button>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to="/teachits" id="navbartext2">
                Teach on ITS
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                activeClassName="active"
                to="/productlist1"
                id="Courses"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={handleDropdownToggle}
              >
                Courses
              </NavLink>
              <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} onClick={handleDropdownClose}>
                <NavLink className="dropdown-item" to="/ac">
                  All Courses
                </NavLink>
                <NavLink className="dropdown-item" to="/productlist1">
                  Python
                </NavLink>
                <NavLink className="dropdown-item" to="/productlist2">
                  Web Development
                </NavLink>
                <NavLink className="dropdown-item" to="/productlist3">
                  Data Science
                </NavLink>
                <NavLink className="dropdown-item" to="/productlist4">
                  Java
                </NavLink>
                <NavLink className="dropdown-item" to="/productlist5">
                  Cyber Security
                </NavLink>
                <NavLink className="dropdown-item" to="/productlist6">
                  Computer Networks
                </NavLink>
                <NavLink className="dropdown-item" to="/productlist7">
                  MySQL
                </NavLink>
                <NavLink className="dropdown-item" to="/productlist8">
                  React Js
                </NavLink>
                <NavLink className="dropdown-item" to="/productlist9">
                  Vue Js
                </NavLink>
                <NavLink className="dropdown-item" to="/productlist10">
                  Next Js
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to="/cart" id="cart">
                Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to="/login" id="navbartextlogin">
                Log in
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to="/signup" id="navbartextsignup">
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
