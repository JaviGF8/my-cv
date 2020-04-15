import React from 'react';
import Section from '../../Section';
import { translate } from '../../../utils/translator';
import Bar from '../../Bar';

const Profile = ({ ...rest }) => (
  <Section {...rest} title={translate('profile.title')} className="profile-section">
    <p>{translate('profile.header')}</p>
    <Bar text="React" amount={80} />
    <Bar text="React Native" amount={50} />
    <Bar text="HTML" amount={75} />
    <Bar text="CSS" amount={85} />
    <Bar text="GraphQL" amount={55} />
    <Bar text="Node" amount={65} />
    <Bar text="Mongo" amount={70} />
    <Bar text="Angular" amount={40} />
    <Bar text="Java" amount={60} />
    <Bar text="Springboot" amount={20} />
    <Bar text="Vue" amount={20} />
    <p>{translate('profile.text')}</p>
    <p>{translate('profile.text2')}</p>
  </Section>
);

export default Profile;
