import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon, ...rest }) => <i {...rest} aria-hidden="true" className={icon} />;

Icon.defaultProps = {
  icon: undefined,
};

Icon.propTypes = {
  icon: PropTypes.string,
};

export default Icon;
