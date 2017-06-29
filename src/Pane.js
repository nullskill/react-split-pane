import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pane extends Component {
  static displayName = 'Pane';

  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    const split = this.props.split;
    const classes = ['Pane', split, this.props.className];

    const style = {
      flex: 1,
      position: 'relative',
      outline: 'none',
    };

    if (this.state.size !== undefined) {
      if (split === 'vertical') {
        style.width = `${this.state.size}px`;
      } else {
        style.height = `${this.state.size}px`;
        style.display = 'flex';
      }
      style.flex = 'none';
    }

    return (
      <div className={classes.join(' ')} style={style}>{this.props.children}</div>
    );
  }
}

Pane.propTypes = {
  split: PropTypes.oneOf(['vertical', 'horizontal']),
  className: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Pane;
