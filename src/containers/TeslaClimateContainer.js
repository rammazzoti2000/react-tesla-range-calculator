import TeslaClimate from '../components/TeslaClimate/TeslaClimate';
import { connect } from 'react-redux';
import { changeClimate } from '../actions';

const mapStateToProps = state => ({
  value: state.config.climate,
  limit: state.config.temperature >  10
});

const mapDispatchToProps = dispatch => ({
  handleChangeClimate: () => dispatch(changeClimate())
});

const TeslaClimateContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaClimate);

export default TeslaClimateContainer;
