import React from 'react';
import CalendarCard from './CalendarCard';

class Calendar extends React.Component {
  paintCalendar () {
    return (
    <ul className="pokemon__list">
      {
        this.props.moodsOfDays.sort(function(a,b) {
        return a.date - b.date;}).map(
          (mood) =>
            <li key={mood.date}>
              <CalendarCard
                date={mood.date}
                mood={mood.mood}
                message= {mood.message}
              />
            </li>
        )
      }
    </ul>)
  }
  render () {
    return (
      <div>
        {this.paintCalendar()}
      </div>
    );
  }
}

export default Calendar;
