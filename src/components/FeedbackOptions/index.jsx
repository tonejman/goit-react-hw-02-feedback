import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.object,
    onClick: PropTypes.func,
  };

  handleClick = e => {
    const name = e.target.textContent.toLowerCase();
    this.props.onLeaveFeedback(name);
  };

  render() {
    return (
      <div className={css.container}>
        <button className={css.btn} onClick={this.handleClick}>
          Good
        </button>
        <button className={css.btn} onClick={this.handleClick}>
          Neutral
        </button>
        <button className={css.btn} onClick={this.handleClick}>
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
