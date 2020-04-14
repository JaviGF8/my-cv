import React, { useState } from 'react';
import Hi from '../components/Hi';
import Cube from '../components/Cube';
import { CUBE_FACES } from '../components/Cube/Cube';
import Navbar from '../components/Navbar';

const getSize = () => {
  const { innerHeight, innerWidth } = window;

  return (innerWidth > innerHeight ? innerHeight : innerWidth) * 0.8;
};
const size = getSize();

const Main = () => {
  const [ face, setFace ] = useState(CUBE_FACES.left);
  return (
    <main>
      <div id="main-container" className="fadein">
        <Navbar onSelect={setFace} selected={face} />
        <Hi />
        <div id="main-cube">
          <Cube
            face={face}
            leftContent={
              <div>
                <h2>INFO</h2>
              </div>
            }
            frontContent={
              <div>
                <h2>FORMACION</h2>
              </div>
            }
            rightContent={
              <div>
                <h2>TRAYECTORIA</h2>
              </div>
            }
            backContent={
              <div>
                <h2>SOCIAL</h2>
              </div>
            }
            size={size}
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
