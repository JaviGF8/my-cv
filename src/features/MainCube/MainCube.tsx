import type { FC } from 'react';

import { Cube } from 'features/cube';
import {
  EducationFace,
  ExperienceFace,
  HelloFace,
  MadeByFace,
  ProfileFace,
  SocialFace,
} from 'features/faces';

import type { MainCubeProps } from './MainCube.types';
import { useMainCube } from './useMainCube';

export const MainCube: FC<MainCubeProps> = ({ isIntroHidden }) => {
  const { face, handleExpandChange, isFullscreen, isInitialTransition, size } = useMainCube({
    isIntroHidden,
  });

  return (
    <div className={isIntroHidden ? '' : 'opacity-0 pointer-events-none'}>
      <Cube
        backContent={isIntroHidden ? <SocialFace onExpandChange={handleExpandChange} /> : undefined}
        bottomContent={
          isIntroHidden ? <MadeByFace onExpandChange={handleExpandChange} /> : undefined
        }
        className={isInitialTransition ? 'transition-transform duration-700' : ''}
        face={face}
        frontContent={
          isIntroHidden ? <ProfileFace onExpandChange={handleExpandChange} /> : undefined
        }
        hasSwipe
        isDisabled={isFullscreen}
        leftContent={
          isIntroHidden ? <EducationFace onExpandChange={handleExpandChange} /> : undefined
        }
        rightContent={
          isIntroHidden ? <ExperienceFace onExpandChange={handleExpandChange} /> : undefined
        }
        size={size}
        topContent={isIntroHidden ? <HelloFace onExpandChange={handleExpandChange} /> : undefined}
      />
    </div>
  );
};
