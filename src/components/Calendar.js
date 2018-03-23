import React from 'react';

class Calendar extends React.Component {
  render () {
    return (
      <div>
        {this.props.date}
      </div>
    );
  }
}

export default Calendar;
