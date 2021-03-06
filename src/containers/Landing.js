import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/trip-start-action';
import TripStart from '../components/TripStart';
import TripOrderForm from './TripOrderForm';
import About from '../components/About';
import PropTypes from 'prop-types';

class Landing extends Component {
  render() {
    return (
      <div className="landing--container">
        <TripStart />
        <About />
        <About />
        <About />
        <About />
        <About />
      </div>
    );
  }
}

Landing.propTypes = {
  setTripStart: PropTypes.func.isRequired,
};

export default connect(
  null,
  actions,
)(Landing);
