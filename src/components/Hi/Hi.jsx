import React, { useState, useEffect } from 'react';
import Cube from '../Cube';

const getSize = () => {
  const { innerHeight, innerWidth } = window;

  return ((innerWidth > innerHeight ? innerHeight : innerWidth) * 0.7) / 10;
};

const getOption = () => {
  const number = Math.floor(Math.random() * 4);

  return [ 'bottom', 'left', 'right', 'top' ][number];
};

const content = <div className="white-background" />;
const size = getSize();
const unanimatedDiv = <div style={{ height: size, width: size, color: 'black' }} />;

const cubeOptions = {
  bottomContent: content,
  leftContent: content,
  rightContent: content,
  topContent: content,
};

const Hi = () => {
  const [ animation, setAnimation ] = useState(false);
  const [ hidden, setHidden ] = useState(false);

  useEffect(() => {
    setAnimation(true);

    setTimeout(() => setAnimation(false), 2000);
    setTimeout(() => setHidden(true), 2500);
  }, []);

  const show = animation && !hidden;

  return (
    <div className={`hi-container${hidden ? ' hidden' : ''}`}>
      <h1>Bienvenido a la web de Javier García</h1>
      <div className="hi">
        <div className="letter">
          <div>
            <Cube size={size} face={show ? getOption() : 'front'} {...cubeOptions} />
            {unanimatedDiv}
            <Cube size={size} face={show ? getOption() : 'front'} {...cubeOptions} />
          </div>
          <div>
            <Cube size={size} face={show ? getOption() : 'front'} {...cubeOptions} />
            {unanimatedDiv}
            <Cube size={size} face={show ? getOption() : 'front'} {...cubeOptions} />
          </div>
          <div>
            <Cube size={size} face={show ? getOption() : 'front'} {...cubeOptions} />
            <Cube size={size} face={show ? getOption() : 'front'} {...cubeOptions} />
            <Cube size={size} face={show ? getOption() : 'front'} {...cubeOptions} />
          </div>
          <div>
            <Cube size={size} face={show ? getOption() : 'front'} {...cubeOptions} />
            {unanimatedDiv}
            <Cube size={size} face={show ? getOption() : 'front'} {...cubeOptions} />
          </div>
          <div>
            <Cube size={size} face={show ? getOption() : 'front'} {...cubeOptions} />
            {unanimatedDiv}
            <Cube size={size} face={show ? getOption() : 'front'} {...cubeOptions} />
          </div>
        </div>
        <div className="letter">
          <div>
            <Cube size={size} face={show ? getOption() : 'front'} {...cubeOptions} />
            <Cube size={size} face={show ? getOption() : 'front'} {...cubeOptions} />
            <Cube size={size} face={show ? getOption() : 'front'} {...cubeOptions} />
          </div>
          <div>
            {unanimatedDiv}
            <Cube size={size} face={show ? getOption() : 'front'} {...cubeOptions} />
            {unanimatedDiv}
          </div>
          <div>
            {unanimatedDiv}
            <Cube size={size} face={show ? getOption() : 'front'} {...cubeOptions} />
            {unanimatedDiv}
          </div>
          <div>
            {unanimatedDiv}
            <Cube size={size} face={show ? getOption() : 'front'} {...cubeOptions} />
            {unanimatedDiv}
          </div>
          <div>
            <Cube size={size} face={show ? getOption() : 'front'} {...cubeOptions} />
            <Cube size={size} face={show ? getOption() : 'front'} {...cubeOptions} />
            <Cube size={size} face={show ? getOption() : 'front'} {...cubeOptions} />
          </div>
        </div>
        <div className="letter">
          <div>
            {unanimatedDiv}
            <Cube size={size} face={show ? getOption() : 'front'} {...cubeOptions} />
            {unanimatedDiv}
          </div>
          <div>
            {unanimatedDiv}
            <Cube size={size} face={show ? getOption() : 'front'} {...cubeOptions} />
            {unanimatedDiv}
          </div>
          <div>
            {unanimatedDiv}
            <Cube size={size} face={show ? getOption() : 'front'} {...cubeOptions} />
            {unanimatedDiv}
          </div>
          <div>
            {unanimatedDiv}
            {unanimatedDiv}
            {unanimatedDiv}
          </div>
          <div>
            {unanimatedDiv}
            <Cube size={size} face={show ? getOption() : 'front'} {...cubeOptions} />
            {unanimatedDiv}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hi;
