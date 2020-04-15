import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import Button from '../Button';

const Section = ({ children, className, disabled, onFullscreen, onFullscreenOut, title }) => {
  const [ fadeout, setFadeout ] = useState(false);
  const [ fullscreen, setFullscreen ] = useState(false);
  const [ tapped, setTapped ] = useState(false);

  useEffect(() => {
    if (fadeout && fullscreen) {
      setTimeout(() => setFullscreen(false), 400);
    }
  }, [ fadeout ]);

  useEffect(() => {
    if (!fullscreen && fadeout) {
      setFadeout(false);
      if ('function' === typeof onFullscreenOut) {
        onFullscreenOut();
      }
    } else if (fullscreen && 'function' === typeof onFullscreen) {
      onFullscreen();
    }
  }, [ fullscreen ]);
  const clearTapped = () => setTapped(false);

  const isDoubleTap = () => {
    if (tapped) {
      setFullscreen(true);
      clearTimeout(clearTapped);
    } else {
      setTapped(true);
      setTimeout(clearTapped, 300);
    }
  };

  return fullscreen ? (
    createPortal(
      <div
        className={`cube-section cube-section-full ${fadeout ? 'fadeout' : 'fadein'}${
          className ? ` ${className}` : ''
        }`}>
        <div className="cube-section-container">
          {title && <h2>{title}</h2>}
          <Button
            className="close-btn"
            icon="fas fa-times"
            onClick={() => setFadeout(true)}
            onTouchEnd={() => setFadeout(true)}
          />
          {children}
        </div>
      </div>,
      document.body,
    )
  ) : (
    <div
      className={`cube-section fadein${className ? ` ${className}` : ''}`}
      onDoubleClick={() => !disabled && setFullscreen(true)}
      onTouchEnd={isDoubleTap}>
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
  className: undefined,
  disabled: false,
  onFullscreen: undefined,
  onFullscreenOut: undefined,
  title: undefined,
};

Section.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onFullscreen: PropTypes.func,
  onFullscreenOut: PropTypes.func,
  title: PropTypes.string,
};

export default Section;
