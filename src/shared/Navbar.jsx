import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBars, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="d-flex pt-1 top-nav col-lg-12 justify-content-between align-items-center ">
      <div className="d-flex col-lg-3 p-0 pl-2 justify-content-start">
        <h3>Sales Dashboard</h3>
      </div>
      <div className='d-flex col-lg-3 p-0 pr-2 justify-content-end align-items-center'>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default Navbar;
