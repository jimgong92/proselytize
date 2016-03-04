import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Board from '../components/Board';

class App extends Component {
  render() {
    return (
      <div>
        <Board board={this.props.battle.board} />
      </div>
    );
  }
}

App.propTypes = {
  battle: PropTypes.object
};

App.defaultProps = {
};

function mapStateToProps(state) {
  return {
    battle: state.battle
  };
}
function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
