import React, { useState } from 'react';
import Icon from '../Icon';
import { translate } from '../../utils/translator';

const Language = () => {
  const [ show, setShow ] = useState(false);
  return (
    <div
      className={`language-section shadow${show ? ' info-section-full' : ''}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}>
      <Icon icon="fas fa-info" />
      <div className="info-container">
        <p className="info-title">{translate('info.howToUse')}</p>
        <p>{translate('info.info')}</p>
      </div>
    </div>
  );
};

export default Language;
