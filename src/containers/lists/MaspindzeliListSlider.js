import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/get-host-list';
import PropTypes from 'prop-types';
import Slide from '../../components/SlideComponents/Slide';
// import LeftSlideArrow from '../../components/SlideComponents/LeftSlideArrow';
// import RightSlideArrow from '../../components/SlideComponents/RightSlideArrow';

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

  goToPrevSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
    }));
  };

  goToNextSlide = () => {
    if (this.state.currentIndex === this.hostItems().length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth(),
    }));
  };
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
    // console.log(this.state.currentIndex);
    // console.log(this.state.translateValue);
    return (
      <div
        className="maspindzelis--host-container--card-container"
        style={{
          transform: `translateX(${this.state.translateValue}px)`,
          transition: 'transform ease-out 2s',
        }}
      >
        {this.hostItems()}
      </div>
    );
  }
}

// <LeftSlideArrow
// className="maspindzelis--host-container--arrows"
// goToPrevSlide={this.goToPrevSlide}
// />
// <RightSlideArrow
// className="maspindzelis--host-container--arrows"
// goToNextSlide={this.goToNextSlide}
// />

function mapStateToProps(state) {
  return {
    hostList: state.hosts.hostList,
  };
}

export default connect(
  mapStateToProps,
  actions,
)(MaspindzeliListSlider);

// const { hostList } = this.props;
// const { activeIndex } = this.state;
// const slides = hostList.map(image => {
//   return (
//     <CarouselItem
//       className="maspindzelis--host-container--host-card"
//       onExiting={this.onExiting}
//       onExited={this.onExited}
//       key={image.id}
//     >
//       <img src={image.src} alt="test" />
//     </CarouselItem>
//   );
// });
// return (
//   <Carousel
//     activeIndex={activeIndex}
//     next={this.next}
//     previous={this.previous}
//   >
//     <CarouselIndicators
//       items={hostList}
//       activeIndex={activeIndex}
//       onClick={this.goToIndex}
//     />
//     {slides}
//     <CarouselControl
//       direction="prev"
//       directionText="Previous"
//       onClick={this.previous}
//     />
//     <CarouselControl
//       direction="next"
//       directionText="Next"
//       onClick={this.next}
//     />
//   </Carousel>
// );

// constructor(props) {
//   super(props);
//   this.state = { activeIndex: 0 };
//   this.next = this.next.bind(this);
//   this.previous = this.previous.bind(this);
//   this.goToIndex = this.goToIndex.bind(this);
//   this.onExiting = this.onExiting.bind(this);
//   this.onExited = this.onExited.bind(this);
// }
//
// // const { hostList } = this.props
//
// onExiting() {
//   this.animating = true;
// }
//
// onExited() {
//   this.animating = false;
// }
//
// next() {
//   if (this.animating) return;
//   const nextIndex =
//     this.state.activeIndex === this.hostList().length - 1
//       ? 0
//       : this.state.activeIndex + 1;
//   this.setState({ activeIndex: nextIndex });
// }
//
// previous() {
//   if (this.animating) return;
//   const nextIndex =
//     this.state.activeIndex === 0
//       ? this.hostList().length - 1
//       : this.state.activeIndex - 1;
//   this.setState({ activeIndex: nextIndex });
// }
//
// goToIndex(newIndex) {
//   if (this.animating) return;
//   this.setState({ activeIndex: newIndex });
// }
