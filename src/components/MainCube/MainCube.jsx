import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Cube from '../Cube';
import Section from '../Section';

const getSize = () => {
  const { innerHeight, innerWidth } = window;

  return (innerWidth > innerHeight ? innerHeight : innerWidth) * 0.8;
};
const size = getSize();

const MainCube = ({ hiddenIntro }) => {
  const [ initialTransition, setInitialTransition ] = useState(true);

  useEffect(() => {
    if (hiddenIntro) {
      setTimeout(() => setInitialTransition(false), 1500);
    }
  }, [ hiddenIntro ]);

  return (
    <div id="main-cube" className={hiddenIntro ? '' : 'hidden-cube'}>
      <Cube
        className={initialTransition ? 'initial-transition' : ''}
        leftContent={<Section title="FORMACION" />}
        frontContent={<Section title="INFO" />}
        rightContent={<Section title="TRAYECTORIA" />}
        backContent={<Section title="SOCIAL" />}
        bottomContent={<Section title="Made by Javier García Fajardo" disabled />}
        topContent={<Section title="Hello :)" disabled />}
        size={size}
        withSwipe
      />
    </div>
  );
};

MainCube.defaultProps = {
  hiddenIntro: false,
};

MainCube.propTypes = {
  hiddenIntro: PropTypes.bool,
};

export default MainCube;
