import type { FC, ReactNode } from 'react';

import type { CubeProps, Face } from './Cube.types';
import { useCube } from './useCube';

const FACES: Face[] = ['front', 'back', 'right', 'left', 'top', 'bottom'];

export const Cube: FC<CubeProps> = ({
  backContent,
  bottomContent,
  className = '',
  face = 'front',
  frontContent,
  hasSwipe = false,
  isDisabled = false,
  leftContent,
  onFaceChange,
  rightContent,
  size,
  topContent,
}) => {
  const {
    cubeTransform,
    getFaceTransform,
    handlePointerCancel,
    handlePointerDown,
    handlePointerUp,
  } = useCube({
    face,
    hasSwipe,
    isDisabled,
    onFaceChange,
    size,
  });

  const contentMap: Record<Face, ReactNode> = {
    back: backContent,
    bottom: bottomContent,
    front: frontContent,
    left: leftContent,
    right: rightContent,
    top: topContent,
  };

  return (
    <div
      className={`relative ${className}`.trim()}
      style={{ height: size, perspective: size * 3, width: size }}
    >
      <div
        className="absolute w-full h-full [transform-style:preserve-3d] transition-transform duration-500 ease-in"
        onPointerCancel={handlePointerCancel}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        style={{ touchAction: 'none', transform: cubeTransform }}
      >
        {FACES.map((f) => (
          <div
            key={f}
            className="absolute bg-ink text-surface shadow-md rounded-xl"
            style={{
              height: size,
              transform: getFaceTransform(f),
              width: size,
            }}
          >
            {contentMap[f]}
          </div>
        ))}
      </div>
    </div>
  );
};
