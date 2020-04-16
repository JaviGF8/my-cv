import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../Icon';

const Network = ({ icon, link, name, username }) => (
  <a className="social-network" target="_blank" href={link} rel="noopener noreferrer">
    <Icon icon={icon} />
    <div>
      <p className="network-name">{name}</p>
      <p className="network-username">{username}</p>
      <p className="network-link">{link}</p>
    </div>
  </a>
);

Network.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default Network;
