import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Cube from '../Cube';
import { CUBE_FACES } from '../Cube/Cube';

const getSize = () => {
  const { innerHeight, innerWidth } = window;

  return Math.floor(((innerWidth > innerHeight ? innerHeight : innerWidth) * 0.7) / 10);
};

const whiteContent = <div className="white-background background" />;
const primaryContent = <div className="primary-background background" />;
const secondaryContent = <div className="secondary-background background" />;
const accentContent = <div className="accent-background background" />;
const size = getSize();
const unanimatedDiv = <div style={{ height: size, width: size, color: 'black' }} />;

const cubeOptions = {
  bottomContent: whiteContent,
  leftContent: primaryContent,
  rightContent: secondaryContent,
  topContent: accentContent,
};

const Hi = ({ onHide }) => {
  const [ animation, setAnimation ] = useState(false);
  const [ hidden, setHidden ] = useState(false);

  useEffect(() => {
    setAnimation(true);

    setTimeout(() => setAnimation(false), 2000);
    setTimeout(() => setHidden(true), 2500);
  }, []);

  useEffect(() => {
    if (hidden && 'function' === typeof onHide) {
      onHide();
    }
  }, [ hidden ]);

  const show = animation && !hidden;

  const getRandomCube = () => {
    let face = CUBE_FACES.front;

    if (show) {
      const number = Math.floor(Math.random() * 4);

      face = [ CUBE_FACES.bottom, CUBE_FACES.left, CUBE_FACES.right, CUBE_FACES.top ][number];
    }

    return <Cube size={size} face={face} {...cubeOptions} />;
  };

  return (
    <div className={`hi-container${hidden ? ' hidden' : ''}`}>
      <h1>
        <span className="primary">
          My C<span>u</span>V<span>e</span>
        </span>{' '}
        by <span className="secondary">Javier García</span>
      </h1>
      <div className="hi">
        <div className="letter">
          <div>
            {getRandomCube()}
            {unanimatedDiv}
            {getRandomCube()}
          </div>
          <div>
            {getRandomCube()}
            {unanimatedDiv}
            {getRandomCube()}
          </div>
          <div>
            {getRandomCube()}
            {getRandomCube()}
            {getRandomCube()}
          </div>
          <div>
            {getRandomCube()}
            {unanimatedDiv}
            {getRandomCube()}
          </div>
          <div>
            {getRandomCube()}
            {unanimatedDiv}
            {getRandomCube()}
          </div>
        </div>
        <div className="letter">
          <div>
            {getRandomCube()}
            {getRandomCube()}
            {getRandomCube()}
          </div>
          <div>
            {unanimatedDiv}
            {getRandomCube()}
            {unanimatedDiv}
          </div>
          <div>
            {unanimatedDiv}
            {getRandomCube()}
            {unanimatedDiv}
          </div>
          <div>
            {unanimatedDiv}
            {getRandomCube()}
            {unanimatedDiv}
          </div>
          <div>
            {getRandomCube()}
            {getRandomCube()}
            {getRandomCube()}
          </div>
        </div>
        <div className="letter">
          <div>
            {unanimatedDiv}
            {getRandomCube()}
            {unanimatedDiv}
          </div>
          <div>
            {unanimatedDiv}
            {getRandomCube()}
            {unanimatedDiv}
          </div>
          <div>
            {unanimatedDiv}
            {getRandomCube()}
            {unanimatedDiv}
          </div>
          <div>
            {unanimatedDiv}
            {unanimatedDiv}
            {unanimatedDiv}
          </div>
          <div>
            {unanimatedDiv}
            {getRandomCube()}
            {unanimatedDiv}
          </div>
        </div>
      </div>
    </div>
  );
};

Hi.defaultProps = {
  onHide: undefined,
};

Hi.propTypes = {
  onHide: PropTypes.func,
};

export default Hi;
