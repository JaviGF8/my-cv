import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const BAR_TYPES = {
  primaryDarker: 'primary-darker',
  primaryDark: 'primary-dark',
  primary: 'primary',
  secondaryDarker: 'secondary-darker',
  secondaryDark: 'secondary-dark',
  secondary: 'secondary',
  accentDarker: 'accent-darker',
  accentDark: 'accent-dark',
  accent: 'accent',
};

const getTotal = (total, amount) => (amount * 100) / total;
const getColor = (total) => {
  if (100 === total) {
    return BAR_TYPES.primaryDarker;
  }
  if (90 <= total) {
    return BAR_TYPES.primaryDark;
  }
  if (75 <= total) {
    return BAR_TYPES.primary;
  }
  if (60 <= total) {
    return BAR_TYPES.secondaryDarker;
  }
  if (55 <= total) {
    return BAR_TYPES.secondaryDark;
  }
  if (40 <= total) {
    return BAR_TYPES.secondary;
  }
  if (25 <= total) {
    return BAR_TYPES.accentDarker;
  }
  if (10 <= total) {
    return BAR_TYPES.accentDark;
  }
  return BAR_TYPES.accent;
};

const Bar = ({ amount, className, text, totalAmount, vertical, ...rest }) => {
  const [ color, setColor ] = useState(BAR_TYPES.primary);
  const [ mounted, setMounted ] = useState(false);
  const [ total, setTotal ] = useState(0);

  useEffect(() => {
    if (mounted) {
      const newtotal = getTotal(totalAmount, amount);
      setTimeout(() => setTotal(newtotal), 500);
      setColor(getColor(newtotal));
    } else {
      setMounted(true);
    }
  }, [ mounted ]);

  useState(() => {
    if (mounted) {
      const newtotal = getTotal(totalAmount, amount);
      setTotal(newtotal);
      setColor(getColor(newtotal));
    }
  }, [ amount, totalAmount ]);

  return (
    <div
      {...rest}
      className={`bar-total fadein${className ? ` ${className}` : ''} ${vertical ? 'vertical' : 'horizontal'}`}>
      <div className={`bar ${color}`} style={vertical ? { height: `${total}` } : { width: `${total}%` }}>
        {mounted && (
          <span className="fadein">
            {text} {total}%
          </span>
        )}
      </div>
    </div>
  );
};

Bar.defaultProps = {
  amount: 0,
  className: undefined,
  text: undefined,
  totalAmount: 100,
  vertical: false,
};

Bar.propTypes = {
  amount: PropTypes.number,
  className: PropTypes.string,
  text: PropTypes.string,
  totalAmount: PropTypes.number,
  vertical: PropTypes.bool,
};

export default Bar;
