import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/trip-start-action';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class TripOrderForm extends Component {
  constructor(props) {
    super(props);
  }

  tripStartClick = () => {
    this.props.setTripStart(() => {
      this.props.history.push('/Signup');
    });
  };

  render() {
    return (
      <div className="trip-order-form">
        <div className="button--trip-start">
          <button onClick={this.tripStartClick.bind(this)} />
        </div>
      </div>
    );
  }
}

TripOrderForm.propTypes = {
  setTripStart: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    setTripStart: state.setTripStart,
  };
}

const TripOrderFormExport = withRouter(TripOrderForm);

export default connect(
  mapStateToProps,
  actions,
)(TripOrderFormExport);
