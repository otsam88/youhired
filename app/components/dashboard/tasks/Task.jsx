import React, { createClass, PropTypes } from 'react';

const Task = createClass({
  displayName: 'Task',

  render() {
    const {
      dateStarted,
      dateDue,
      completed,
      description,
      application
    } = this.props;
    return (
      <div>
        <div className='card-horizontal'>
          <h5 className='description'>{description}</h5>
          <br/>
          <h6 className='date-due'>{dateDue}</h6>
        </div>
      </div>
    );
  }
});

export default Task;