import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const Button = ({ className, icon, text, ...rest }) => (
  <button className={`custom-btn${className ? ` ${className}` : ''}`} type="button" {...rest}>
    {icon && <Icon icon={icon} />}
    {text && <span>{text}</span>}
  </button>
);

Button.defaultProps = {
  className: undefined,
  icon: undefined,
  text: undefined,
};

Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
