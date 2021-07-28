import React from 'react';
import PropTypes from 'prop-types';
import './TeslaClimate.css';

const TeslaClimate = ({ value, limit, handleChangeClimate }) => (
  <div className="tesla-climate">
    <label
      className={`tesla-climate__item ${value ? 'tesla-climate__item--active' : '' }  ${!limit ? 'tesla-heat':''}`}
    >
      <p>{limit ? 'ac' : 'heat'} {value ? 'on' : 'off'}</p>
      <i className="tesla-climate__icon"></i>
      <input
        type="checkbox"
        name="climate"
        checked={value}
        onChange={() => {handleChangeClimate()}}
      />
    </label>
  </div>
);

TeslaClimate.propTypes = {
  value: PropTypes.bool,
  limit: PropTypes.bool,
  handleChangeClimate: PropTypes.func
}

export default TeslaClimate;