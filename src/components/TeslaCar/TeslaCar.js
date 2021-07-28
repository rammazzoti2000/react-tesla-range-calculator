import React from 'react';
import PropTypes from 'prop-types';
import './TeslaCar.css';

const TeslaCar = ({ wheelsize }) => (
  <div className="tesla-car">
    <div className="tesla-wheels">
      <div className={`tesla-wheel tesla-wheel--front tesla-wheel--${wheelsize}`}></div>
      <div className={`tesla-wheel tesla-wheel--rear tesla-wheel--${wheelsize}`}></div>
    </div>
  </div>
);

TeslaCar.propTypes = {
  wheelsize: PropTypes.number
}

export default TeslaCar;
