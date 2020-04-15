import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import Button from '../Button';

const Section = ({ children, disabled, title }) => {
  const [ fadeout, setFadeout ] = useState(false);
  const [ fullscreen, setFullscreen ] = useState(false);

  useEffect(() => {
    if (fadeout) {
      setTimeout(() => setFullscreen(false), 400);
    }
  }, [ fadeout ]);

  useEffect(() => {
    if (!fullscreen) {
      setFadeout(false);
    }
  }, [ fullscreen ]);

  return fullscreen ? (
    createPortal(
      <div className={`cube-section-full ${fadeout ? 'fadeout' : 'fadein'}`}>
        <div className="cube-section-container">
          {title && <h2>{title}</h2>}
          <Button className="close-btn" icon="fas fa-times" onClick={() => setFadeout(true)} />
          {children}
        </div>
      </div>,
      document.body,
    )
  ) : (
    <div className="cube-section fadein" onDoubleClick={() => !disabled && setFullscreen(true)}>
      <div>
        {title && <h2>{title}</h2>}
        {children}
      </div>
      {/* <Button className="see-more-btn" icon="fas fa-plus" onClick={() => setFullscreen(true)} /> */}
    </div>
  );
};

Section.defaultProps = {
  children: undefined,
  disabled: false,
  title: undefined,
};

Section.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
  disabled: PropTypes.bool,
  title: PropTypes.string,
};

export default Section;
