/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const CUBE_FACES = {
  front: 'front',
  back: 'back',
  left: 'left',
  right: 'right',
  top: 'top',
  bottom: 'bottom',
};

const isArrowLeft = ({ code, key, keyCode }) => 37 === keyCode || 'ArrowLeft' === code || 'ArrowLeft' === key;
const isArrowUp = ({ code, key, keyCode }) => 38 === keyCode || 'ArrowUp' === code || 'ArrowUp' === key;
const isArrowRight = ({ code, key, keyCode }) => 39 === keyCode || 'ArrowRight' === code || 'ArrRight' === key;
const isArrowDown = ({ code, key, keyCode }) => 40 === keyCode || 'ArrowDown' === code || 'ArrowDown' === key;

const Cube = ({
  backContent,
  bottomContent,
  className,
  disabled,
  face,
  frontContent,
  leftContent,
  rightContent,
  size,
  topContent,
  withSwipe,
}) => {
  const [ angX, setAngX ] = useState(0);
  const [ angY, setAngY ] = useState(0);
  const [ moving, setMoving ] = useState(false);
  const [ startX, setStartX ] = useState(null);
  const [ startY, setStartY ] = useState(null);

  const handleKeyDown = (event) => {
    if (!moving && isArrowLeft(event)) {
      setAngY(angY + 90);
    } else if (!moving && isArrowUp(event)) {
      setAngX(angX - 90);
    } else if (!moving && isArrowRight(event)) {
      setAngY(angY - 90);
    } else if (!moving && isArrowDown(event)) {
      setAngX(angX + 90);
    }
  };

  useEffect(() => {
    let x = 0;
    let y = 0;

    if (face === CUBE_FACES.front) {
      y = 0;
    } else if (face === CUBE_FACES.back) {
      y = -180;
    } else if (face === CUBE_FACES.left) {
      y = -90;
    } else if (face === CUBE_FACES.right) {
      y = 90;
    } else if (face === CUBE_FACES.top) {
      x = -90;
    } else if (face === CUBE_FACES.bottom) {
      x = 90;
    }

    setAngX(x);
    setAngY(y);
  }, [ face ]);

  useEffect(() => {
    setStartX(null);
    setStartY(null);
    setMoving(true);
    setTimeout(() => setMoving(false), 500);
  }, [ angX, angY ]);

  const handleMovement = (event) => {
    event.preventDefault();
    if (!disabled && !moving && (startX || startY)) {
      const clientX = event?.changedTouches?.[0]?.clientX || event.clientX;
      const clientY = event?.changedTouches?.[0]?.clientY || event.clientY;

      const diffX = clientX - startX;
      const diffY = clientY - startY;

      if (50 < Math.abs(diffX)) {
        // horizontal swipe
        setAngY(0 < diffX ? angY + 90 : angY - 90);
      }
      if (50 < Math.abs(diffY)) {
        // vertical swipe
        setAngX(0 < diffY ? angX - 90 : angX + 90);
      }
    }
  };

  const handleMovementStart = (event) => {
    const clientX = event?.touches?.[0]?.clientX || event.clientX;
    const clientY = event?.touches?.[0]?.clientY || event.clientY;

    setStartX(clientX);
    setStartY(clientY);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    if (withSwipe) {
      document.addEventListener('mouseup', handleMovement);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mouseup', handleMovement);
    };
  });

  return (
    <div
      className={`cube-container${className ? ` ${className}` : ''}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: 'relative',
        perspective: size * 3,
      }}>
      <div
        className="cube"
        style={{ transform: `translateZ(-${size / 2}px) rotateX(${angX}deg) rotateY(${angY}deg)` }}
        onMouseDown={withSwipe && !disabled ? handleMovementStart : undefined}
        onMouseUp={withSwipe && !disabled ? handleMovement : undefined}
        onTouchEnd={withSwipe && !disabled ? handleMovement : undefined}
        onTouchStart={withSwipe && !disabled ? handleMovementStart : undefined}>
        <div
          className="cube-face cube-front"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotateX(0deg) translateZ(${size / 2}px)`,
          }}>
          {frontContent}
        </div>
        <div
          className="cube-face cube-back"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotateX(180deg) rotateZ(180deg) translateZ(${size / 2}px)`,
          }}>
          {backContent}
        </div>
        <div
          className="cube-face cube-right"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotateY(90deg) translateZ(${size / 2}px)`,
          }}>
          {rightContent}
        </div>
        <div
          className="cube-face cube-left"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
          }}>
          {leftContent}
        </div>
        <div
          className="cube-face cube-top"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotateX(90deg) translateZ(${size / 2}px)`,
          }}>
          {topContent}
        </div>
        <div
          className="cube-face cube-bottom"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
          }}>
          {bottomContent}
        </div>
      </div>
    </div>
  );
};

Cube.defaultProps = {
  backContent: undefined,
  bottomContent: undefined,
  className: undefined,
  disabled: false,
  face: CUBE_FACES.front,
  frontContent: undefined,
  leftContent: undefined,
  rightContent: undefined,
  size: 150,
  topContent: undefined,
  withSwipe: false,
};

Cube.propTypes = {
  backContent: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
  bottomContent: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  face: PropTypes.oneOf(Object.values(CUBE_FACES)),
  frontContent: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
  leftContent: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
  rightContent: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
  size: PropTypes.number,
  topContent: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
  withSwipe: PropTypes.bool,
};

export default Cube;
