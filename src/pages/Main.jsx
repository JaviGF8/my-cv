import React, { useState } from 'react';
import Hi from '../components/Hi';
// import { Switch, Route } from 'react-router-dom';

const Main = () => {
  const [ face, setFace ] = useState('front');
  return (
    <main>
      <div id="main-container" className="fadein">
        {/* MY CV PAGE */}
        {/* <Box face={face} size={200} rightContent={<div>right</div>} leftContent={<div>left</div>} frontContent={<div>front</div>} backContent={<div>back</div>} topContent={<div>top</div>} bottomContent={<div>bottom</div>} />
        <button type="button" onClick={() => setFace('right')} >right</button>
        <button type="button" onClick={() => setFace('left')} >left</button>
        <button type="button" onClick={() => setFace('front')} >front</button>
        <button type="button" onClick={() => setFace('back')} >back</button>
        <button type="button" onClick={() => setFace('top')} >top</button>
        <button type="button" onClick={() => setFace('bottom')} >bottom</button> */}
        <Hi />
      </div>
    </main>
  );
};

export default Main;
