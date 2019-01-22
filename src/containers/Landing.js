import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/trip-start-action";

import PropTypes from "prop-types";

class Landing extends Component {
  tripStartClick = () => {
    this.props.setTripStart(() => {
      this.props.history.push("/Signup");
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.tripStartClick.bind(this)} />
        TEST LANDING
      </div>
    );
  }
}

Landing.propTypes = {
  setTripStart: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    tripStart: state.tripStart,
    errors: state.errors.errorsObject
  };
}

export default connect(
  mapStateToProps,
  actions
)(Landing);
