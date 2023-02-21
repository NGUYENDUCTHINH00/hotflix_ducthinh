import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  let element = (
    <ul
      className={
        isNavExpanded
          ? "navbar-nav me-auto mb-2 mb-lg-0 navBar expanded "
          : "navbar-nav me-auto mb-2 mb-lg-0 navBar "
      }
    >
      <li className='nav-item dropdown'>
        <a
          className='nav-link dropdown-toggle color-White'
          href='#'
          role='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          HOME STYLE
        </a>
        <ul className='dropdown-menu'>
          <li>
            <a className='dropdown-item color-White' href='#'>
              HOME STYLE 1
            </a>
          </li>
          <li>
            <a className='dropdown-item color-White' href='#'>
              HOME STYLE 2
            </a>
          </li>
          <li>
            <a className='dropdown-item color-White' href='#'>
              HOME STYLE 3
            </a>
          </li>
        </ul>
      </li>
      <li className='nav-item dropdown'>
        <a
          className='nav-link dropdown-toggle color-White'
          href='#'
          role='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          CATA LOG
        </a>
        <ul className='dropdown-menu'>
          <li>
            <a className='dropdown-item color-White' href='#'>
              CATA LOG 1
            </a>
          </li>
          <li>
            <a className='dropdown-item color-White' href='#'>
              CATA LOG 2
            </a>
          </li>
          <li>
            <a className='dropdown-item color-White' href='#'>
              DETAILS STYLE 1
            </a>
          </li>
          <li>
            <a className='dropdown-item color-White' href='#'>
              DETAILS STYLE 2
            </a>
          </li>
        </ul>
      </li>
      <li className='nav-item'>
        <a className='nav-link color-White ' aria-current='page' href='#'>
          PRICING PLAN
        </a>
      </li>
      <li className='nav-item dropdown'>
        <a
          className='nav-link  color-White'
          href='#'
          role='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          <ion-icon name='ellipsis-horizontal-outline'></ion-icon>
        </a>
        <ul className='dropdown-menu'>
          <li>
            <a className='dropdown-item color-White' href='#'>
              About
            </a>
          </li>
          <li>
            <a className='dropdown-item color-White' href='#'>
              Profile
            </a>
          </li>
          <li>
            <a className='dropdown-item color-White' href='#'>
              Contacts
            </a>
          </li>
          <li>
            <a className='dropdown-item color-White' href='#'>
              Help center
            </a>
          </li>
          <li>
            <a className='dropdown-item color-White' href='#'>
              Privacy policy
            </a>
          </li>
          <li>
            <a className='dropdown-item color-White' href='#'>
              Admin pages
            </a>
          </li>
          <li>
            <a className='dropdown-item color-White' href='#'>
              Sign in
            </a>
          </li>
          <li>
            <a className='dropdown-item color-White' href='#'>
              Sign up
            </a>
          </li>
          <li>
            <a className='dropdown-item color-White' href='#'>
              Forgot password
            </a>
          </li>
          <li>
            <a className='dropdown-item color-White' href='#'>
              404 Page
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );

  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='navbar-header'>
          <a className='navbar-brand header__logo' href='#'>
            <img
              src='http://hotflix.volkovdesign.com/main/img/logo.svg'
              alt=''
            />
          </a>
          <div className='none'>{element}</div>
          <div className='nav-end'>
            <form className='d-flex' role='search'>
              <input
                className=' me-2 color-White none'
                type='text'
                placeholder='Search...'
              />
              <button className='block me-1 color-White'>
                <ion-icon name='search-outline'></ion-icon>
              </button>
            </form>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle color-White'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                EN
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item color-White' href='#'>
                    English
                  </a>
                </li>
                <li>
                  <a className='dropdown-item color-White' href='#'>
                    Spanish
                  </a>
                </li>
                <li>
                  <a className='dropdown-item color-White' href='#'>
                    Russia
                  </a>
                </li>
              </ul>
            </li>
            <button
              className='btn btn-outline-warning color-White'
              type='submit'
              style={{ widdth: 85 }}
            >
              SIGN IN
            </button>
            <button
              style={{ fontSize: "30px", padding: "0px 15px" }}
              className='reorder block '
              type='button'
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvasDarkNavbar'
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              <ion-icon name='reorder-four-outline'></ion-icon>
            </button>
            <div
              class='offcanvas offcanvas-end text-bg-dark'
              tabindex='-1'
              id='offcanvasDarkNavbar'
              aria-labelledby='offcanvasDarkNavbarLabel'
            >
              <div class='offcanvas-header'>
                <button
                  onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                  }}
                  type='button'
                  class='btn-close btn-close-white'
                  data-bs-dismiss='offcanvas'
                  aria-label='Close'
                ></button>
              </div>
              <div class='offcanvas-body'>{element}</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
