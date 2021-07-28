import TeslaCounter from '../components/TeslaCounter/TeslaCounter';
import { connect } from 'react-redux';
import { counterDefaultVal } from '../constants/counterDefaultVal';
import { temperatureDown, temperatureUp } from '../actions';

const mapStateToProps = state => ({
  currentValue: state.config.temperature,
  initValues: counterDefaultVal.temperature
});

const mapDispatchToProps = dispatch => ({
  increment: (value) => {
    dispatch(temperatureUp(value));
  },
  decrement: (value) => {
    dispatch(temperatureDown(value));
  }
});

const TeslaTempCounterContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaCounter);

export default TeslaTempCounterContainer;
