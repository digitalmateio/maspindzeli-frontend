import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/get-host-list';
import PropTypes from 'prop-types';
// import TablePagination from '@material-ui/core/TablePagination';

class HostList extends Component {
  componentDidMount() {
    return this.props.callHostList();
  }

  hostItem() {
    return this.props.hostList.map(image => {
      return (
        <div className="maspindzelis--host-container--host-card" key={image.id}>
          <img src={image.url} alt="test" />
        </div>
      );
    });
  }

  render() {
    return this.hostItem();
  }
}

function mapStateToProps(state) {
  return {
    hostList: state.hosts.hostList,
  };
}

export default connect(
  mapStateToProps,
  actions,
)(HostList);
