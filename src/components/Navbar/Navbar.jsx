import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
// import { CUBE_FACES } from '../Cube/Cube';

const Navbar = ({ onSelect, selected }) => {
  const [ expanded, setExpanded ] = useState(false);

  useEffect(() => {
    setExpanded(false);
  }, [ selected ]);

  return (
    <nav className="navbar shadow">
      <Button className="expand-btn" icon="fas fa-bars" onClick={() => setExpanded(!expanded)} />
      <div className="navbar-content">
        <div className="navbar-title">My CuVe</div>
        <div className="navbar-subtitle">
          by <span>Javi García Fajardo</span>
        </div>
        {/* <div className={`navbar-btns${expanded ? ' expanded' : ''}`}>
          <Button
            className={`navbar-btn${CUBE_FACES.left === selected ? ' navbar-btn-selected' : ''}`}
            text="Info"
            icon="fas fa-info"
            onClick={() => onSelect(CUBE_FACES.left)}
          />
          <Button
            className={`navbar-btn${CUBE_FACES.front === selected ? ' navbar-btn-selected' : ''}`}
            text="Formación"
            icon="fas fa-graduation-cap"
            onClick={() => onSelect(CUBE_FACES.front)}
          />
          <Button
            className={`navbar-btn${CUBE_FACES.right === selected ? ' navbar-btn-selected' : ''}`}
            text="Trayectoria"
            icon="fas fa-code"
            onClick={() => onSelect(CUBE_FACES.right)}
          />
          <Button
            className={`navbar-btn${CUBE_FACES.back === selected ? ' navbar-btn-selected' : ''}`}
            text="Social"
            icon="fab fa-github"
            onClick={() => onSelect(CUBE_FACES.back)}
          />
        </div> */}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default Navbar;
