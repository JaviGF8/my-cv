import React from 'react';
import Section from '../../Section';
import { translate } from '../../../utils/translator';
import Bar from '../../Bar';

const Profile = ({ ...rest }) => (
  <Section {...rest} title={translate('profile.title')} className="profile-section">
    <p>{translate('profile.header')}</p>
    <Bar text="React" amount={85} />
    <Bar text="React Native" amount={60} />
    <Bar text="HTML" amount={85} />
    <Bar text="CSS" amount={85} />
    <Bar text="Jest" amount={65} />
    <Bar text="NextJs" amount={50} />
    <Bar text="GraphQL" amount={55} />
    <Bar text="Node" amount={65} />
    <Bar text="Mongo" amount={60} />
    <Bar text="Angular" amount={30} />
    <Bar text="Java" amount={40} />
    <p>{translate('profile.text')}</p>
    <p>{translate('profile.text2')}</p>
  </Section>
);

export default Profile;
