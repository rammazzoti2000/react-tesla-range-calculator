import TeslaCar from "../components/TeslaCar/TeslaCar";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  wheelsize: state.config.wheels
});

const TeslaCarContainer = connect(mapStateToProps, null)(TeslaCar);

export default TeslaCarContainer;
