import React from 'react';
import Section from '../../Section';
import { translate } from '../../../utils/translator';
import Title from './Title';

const titles = [
  {
    date: '2006 - 2013',
    expeditor: translate('education.university.expeditor'),
    name: translate('education.university.title'),
  },
  { date: '04/2019', expeditor: translate('education.react.expeditor'), name: translate('education.react.title') },
  {
    date: '06/2017',
    expeditor: translate('education.reactBasic.expeditor'),
    name: translate('education.reactBasic.title'),
  },
  {
    date: '06/2017',
    expeditor: translate('education.angular4.expeditor'),
    name: translate('education.angular4.title'),
  },
  {
    date: '06/2017',
    expeditor: translate('education.typescript.expeditor'),
    name: translate('education.typescript.title'),
  },
  { date: '06/2017', expeditor: translate('education.jquery.expeditor'), name: translate('education.jquery.title') },
  {
    date: '06/2017',
    expeditor: translate('education.bootstrap.expeditor'),
    name: translate('education.bootstrap.title'),
  },
  {
    date: '11/2016',
    expeditor: translate('education.angularjs.expeditor'),
    name: translate('education.angularjs.title'),
  },
  {
    date: '03/2016 - 04/2016',
    expeditor: translate('education.agile.expeditor'),
    name: translate('education.agile.title'),
  },
  {
    date: '06/2015 - 08/2015',
    expeditor: translate('education.android.expeditor'),
    name: translate('education.android.title'),
  },
];

const Education = ({ ...rest }) => (
  <Section {...rest} title={translate('education.title')} className="education-section">
    <div className="education-titles">
      {titles.map((title) => (
        <Title key={title.name} {...title} />
      ))}
    </div>
  </Section>
);

export default Education;
