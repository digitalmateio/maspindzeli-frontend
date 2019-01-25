import React from 'react';
import MaspindzeliList from '../../containers/lists/MaspindzeliList';
const Maspindzelis = () => {
  return (
    <div className="maspindzelis">
      <div className="maspindzelis--title-container">
        <div className="maspindzelis--title-container--title">
          Our Maspindzelis
        </div>
        <div className="maspindzelis--title-container--description">
          description
        </div>
      </div>
      <div className="maspindzelis--host-container">
        <MaspindzeliList />
      </div>
    </div>
  );
};

export default Maspindzelis;
