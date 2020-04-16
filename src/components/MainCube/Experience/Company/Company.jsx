import React from 'react';
import PropTypes from 'prop-types';

const Company = ({ end, name, place, role, start, technologies }) => (
  <div className="company-experience">
    <p className="company-name">{name}</p>
    <p className="company-duration">
      {start} - {end}
    </p>
    <p className="company-role">{role}</p>
    <p className="company-place">{place}</p>
    <p className="company-tech">{technologies}</p>
  </div>
);

Company.propTypes = {
  end: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
};

export default Company;
