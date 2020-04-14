import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { CUBE_FACES } from '../Cube/Cube';

const Navbar = ({ onSelect, selected }) => (
  <nav className="navbar shadow">
    <div className="navbar-content">
      <div className="navbar-title">JGF</div>
      <div className="navbar-btns">
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
      </div>
    </div>
  </nav>
);

Navbar.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default Navbar;
