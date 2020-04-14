import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
// import { CUBE_FACES } from '../Cube/Cube';

const Navbar = ({ selected }) => {
  const [ expanded, setExpanded ] = useState(false);

  useEffect(() => {
    setExpanded(false);
  }, [ selected ]);

  return (
    <nav className="navbar shadow">
      <Button className="expand-btn" icon="fas fa-bars" onClick={() => setExpanded(!expanded)} />
      <div className="navbar-content">
        <div className="navbar-title">
          My C<span>u</span>V<span>e</span>
        </div>
        <div className="navbar-subtitle">
          by <span>Javi García Fajardo</span>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  selected: PropTypes.string.isRequired,
};

export default Navbar;
