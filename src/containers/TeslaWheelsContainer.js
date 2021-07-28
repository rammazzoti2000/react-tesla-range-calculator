import TeslaWheels from '../components/TeslaWheels/TeslaWheels';
import { connect } from 'react-redux';
import { changeWheel } from '../actions';

const mapStateToProps = state => ({
  value: state.config.wheels
});

const mapDispatchToProps = dispatch => ({
  handleChangeWheels: (size) => {
    dispatch(changeWheel(size));
  }
});

const TeslaWheelsContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaWheels);

export default TeslaWheelsContainer;
