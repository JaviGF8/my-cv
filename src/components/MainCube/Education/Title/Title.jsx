import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ date, expeditor, name }) => (
  <div className="education-title">
    <p className="title-name">{name}</p>
    <p className="title-expeditor">{expeditor}</p>
    <p className="title-date">{date}</p>
  </div>
);

Title.propTypes = {
  date: PropTypes.string.isRequired,
  expeditor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Title;
