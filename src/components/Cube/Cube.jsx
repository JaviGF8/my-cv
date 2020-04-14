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

const Box = ({
  backContent,
  bottomContent,
  className,
  face,
  frontContent,
  leftContent,
  rightContent,
  size,
  topContent,
}) => {
  const [ angX, setAngX ] = useState(0);
  const [ angY, setAngY ] = useState(0);

  useEffect(() => {
    let x = 0;
    let y = 0;

    if (face === CUBE_FACES.front) {
      y = 0;
    } else if (face === CUBE_FACES.back) {
      y = -180;
    } else if (face === CUBE_FACES.left) {
      y = 90;
    } else if (face === CUBE_FACES.right) {
      y = -90;
    } else if (face === CUBE_FACES.top) {
      x = -90;
    } else if (face === CUBE_FACES.bottom) {
      x = 90;
    }

    setAngX(x);
    setAngY(y);
  }, [ face ]);

  return (
    <div
      className={`cube-container${className ? ` ${className}` : ''}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: 'relative',
        perspective: size * 3,
      }}>
      <div className="cube" style={{ transform: `translateZ(-${size / 2}px) rotateX(${angX}deg) rotateY(${angY}deg)` }}>
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

Box.defaultProps = {
  backContent: undefined,
  bottomContent: undefined,
  className: undefined,
  face: CUBE_FACES.front,
  frontContent: undefined,
  leftContent: undefined,
  rightContent: undefined,
  size: 150,
  topContent: undefined,
};

Box.propTypes = {
  backContent: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
  bottomContent: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
  className: PropTypes.string,
  face: PropTypes.oneOf(Object.values(CUBE_FACES)),
  frontContent: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
  leftContent: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
  rightContent: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
  size: PropTypes.number,
  topContent: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
};

export default Box;
