import type { FC } from 'react';
import { useState } from 'react';

import { MainCube } from 'features/MainCube';

import { Hi } from 'components/Hi';
import { Info } from 'components/Info';
import { Language } from 'components/Language';
import { Navbar } from 'components/Navbar';

export const Main: FC = () => {
  const [isIntroHidden, setIsIntroHidden] = useState(false);

  return (
    <main className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden">
      <Navbar />
      <Language />
      <Hi onHide={() => setIsIntroHidden(true)} />
      <MainCube isIntroHidden={isIntroHidden} />
      <Info />
    </main>
  );
};
