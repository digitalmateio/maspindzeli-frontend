import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/host-slider-actions';
import PropTypes from 'prop-types';
import MaspindzeliListSlider from '../../containers/lists/MaspindzeliListSlider';
import LeftSlideArrow from '../SlideComponents/LeftSlideArrow';
import RightSlideArrow from '../SlideComponents/RightSlideArrow';

class Maspindzelis extends Component {
  LeftSlideArrow = () => {
    return <button>next arrow icon</button>;
  };
  RightSlideArrow = () => {
    return <button>next arrow icon</button>;
  };

  backClickHandler = () => {
    return this.props.goToPrevSlide(
      this.props.currentIndex,
      this.props.translateValue,
      this.props.listLength,
      this.slideWidth(),
    );
  };
  nextClickHandler = () => {
    return this.props.goToNextSlide(
      this.props.currentIndex,
      this.props.translateValue,
      this.props.listLength,
      this.slideWidth(),
    );
  };

  // computed:

  slideWidth() {
    return document.querySelector('.maspindzelis--host-container--host-card')
      .clientWidth;
  }

  render() {
    console.log(this.props.listLength);
    return (
      <div className="maspindzelis">
        <div className="maspindzelis--title-container">
          <div className="maspindzelis--title-container--title">
            Our Maspindzelis
          </div>
          <div className="maspindzelis--title-container--description">
            description
          </div>
        </div>
        <div className="maspindzelis--host-container">
          <button onClick={this.backClickHandler.bind(this)}>
            left slide arrow
          </button>
          <button onClick={this.nextClickHandler.bind(this)}>
            right slide arrow
          </button>
          <MaspindzeliListSlider />
        </div>
      </div>
    );
  }
}

// <LeftSlideArrow
// className="maspindzelis--host-container--arrows-left"
// onClick={this.backClickHandler.bind(this)}
// />
// <RightSlideArrow
// className="maspindzelis--host-container--arrows"
// onClick={this.nextClickHandler.bind(this)}
// />

// Maspindzelis.propTypes = {
//   slideState: PropTypes.obj.isRequired,
//   goToNextSlide: Proptypes.func.isRequired,
//   goToPrevSlide: Proptypes.func.isRequired,
// };

function mapStateToProps(state) {
  return {
    currentIndex: state.slideState.currentIndex,
    translateValue: state.slideState.translateValue,
    listLength: state.hosts.hostList.length,
  };
}

// export default Maspindzelis;
export default connect(
  mapStateToProps,
  actions,
)(Maspindzelis);
