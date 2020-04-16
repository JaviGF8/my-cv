import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Cube from '../Cube';
import Profile from './Profile';
import Section from '../Section';
import { CUBE_FACES } from '../Cube/Cube';
import Experience from './Experience';
import Social from './Social';
import Education from './Education';

const getSize = () => {
  const { innerHeight, innerWidth } = window;

  return (innerWidth > innerHeight ? innerHeight : innerWidth) * 0.8;
};
const size = getSize();

const MainCube = ({ hiddenIntro }) => {
  const [ initialTransition, setInitialTransition ] = useState(true);
  const [ isFullscreen, setIsFullscreen ] = useState(false);

  useEffect(() => {
    if (hiddenIntro) {
      setTimeout(() => setInitialTransition(false), 750);
    }
  }, [ hiddenIntro ]);

  const commonProps = {
    onFullscreen: () => setIsFullscreen(true),
    onFullscreenOut: () => setIsFullscreen(false),
  };

  return (
    <div id="main-cube" className={hiddenIntro ? '' : 'hidden-cube'}>
      <Cube
        className={initialTransition ? 'initial-transition' : ''}
        disabled={isFullscreen}
        face={initialTransition ? CUBE_FACES.back : CUBE_FACES.front}
        leftContent={hiddenIntro && <Education {...commonProps} />}
        frontContent={hiddenIntro && <Profile {...commonProps} />}
        rightContent={hiddenIntro && <Experience {...commonProps} />}
        backContent={hiddenIntro && <Social {...commonProps} />}
        bottomContent={hiddenIntro && <Section {...commonProps} title="Made by Javi García Fajardo" disabled />}
        topContent={hiddenIntro && <Section {...commonProps} title="Hello :)" disabled />}
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
