import React from 'react';

class CalendarCard extends React.Component {
  render () {
    return (
      <div>
        {this.props.date}
      </div>
    );
  }
}

export default CalendarCard;
