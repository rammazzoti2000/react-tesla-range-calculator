import TeslaStats from '../components/TeslaStats/TeslaStats';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  carstats: state.carstats
});

const TeslaStatsContainer = connect(mapStateToProps, null)(TeslaStats);

export default TeslaStatsContainer;
