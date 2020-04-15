import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const Button = ({ children, className, icon, text, ...rest }) => (
  <button className={`custom-btn${className ? ` ${className}` : ''}`} type="button" {...rest}>
    {icon && <Icon icon={icon} />}
    {text && <span>{text}</span>}
    {children}
  </button>
);

Button.defaultProps = {
  children: undefined,
  className: undefined,
  icon: undefined,
  text: undefined,
};

Button.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
  className: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
