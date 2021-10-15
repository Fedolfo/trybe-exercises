// src/List.js
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class List extends React.Component {
  render () {
    const { list } = this.props;

    return (
      <div>
          {list.map((element, index) => <p key={ index }>{element}</p>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.listReducer
});

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default connect(mapStateToProps)(List);