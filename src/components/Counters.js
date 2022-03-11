import React, { Component } from 'react';

export default class Counters extends Component {
  render() {
    return (
      <>
        <div className='counter_box'>
          <i className="fa fa-code" aria-hidden="true"></i>
          <div className="counting" data-count="900000">0</div>
          <h5>Lines of code</h5>
        </div>
      </>
    );
  }
}
