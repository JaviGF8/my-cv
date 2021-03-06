import React, { useState } from 'react';
import Hi from '../components/Hi';
import Navbar from '../components/Navbar';
import MainCube from '../components/MainCube';
import Info from '../components/Info';

const Main = () => {
  const [ hiddenIntro, setHiddenIntro ] = useState(false);

  return (
    <main>
      <div id="main-container" className="fadein">
        <Navbar />
        <Hi onHide={() => setHiddenIntro(true)} />
        <MainCube hiddenIntro={hiddenIntro} />
        <Info />
        <div id="selected-section" />
      </div>
    </main>
  );
};

export default Main;
