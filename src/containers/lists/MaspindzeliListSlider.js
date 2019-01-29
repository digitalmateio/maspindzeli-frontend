import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/get-host-list';
import PropTypes from 'prop-types';
import Slide from '../../components/SlideComponents/Slide';

class MaspindzeliListSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      translateValue: 0,
    };
  }
  componentDidMount() {
    return this.props.callHostList();
  }

  // computed:

  slideWidth() {
    return document.querySelector('.maspindzelis--host-container--host-card')
      .clientWidth;
  }

  hostItems() {
    return this.props.hostList.map(image => {
      return (
        <img
          key={image.id}
          className="maspindzelis--host-container--host-card"
          src={image.url}
          alt="test"
        />
      );
    });
  }

  render() {
    console.log(this.props.translateValue);
    return (
      <div
        className="maspindzelis--host-container--card-container"
        style={{
          transform: `translateX(${this.props.translateValue}px)`,
          transition: 'transform ease-out 2s',
        }}
      >
        {this.hostItems()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hostList: state.hosts.hostList,
    translateValue: state.slideState.translateValue,
  };
}

export default connect(
  mapStateToProps,
  actions,
)(MaspindzeliListSlider);
