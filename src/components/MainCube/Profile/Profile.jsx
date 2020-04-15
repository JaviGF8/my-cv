import React from 'react';
import Section from '../../Section';
import { translate } from '../../../utils/translator';
import Bar from '../../Bar';

const Profile = () => (
  <Section title={translate('profile.title')} className="profile-section">
    <p className="">{translate('profile.header')}</p>
    <Bar text="React" amount={80} />
    <Bar text="React Native" amount={50} />
    <Bar text="HTML" amount={75} />
    <Bar text="CSS" amount={85} />
    <Bar text="Node" amount={60} />
    <Bar text="Mongo" amount={70} />
    <Bar text="Angular" amount={40} />
    <Bar text="Java" amount={60} />
  </Section>
);

export default Profile;
