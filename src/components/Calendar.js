import React from 'react';
import { Link } from 'react-router-dom';
import CalendarCard from './CalendarCard';
import Plus from '../images/plus.png';

class Calendar extends React.Component {
  paintCalendar () {
    return (
    <ul className="calendar__list">
      {
        this.props.moodsOfDays.sort(function(a,b) {
          return new Date(a.date) - new Date(b.date);}).map(
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
      <div className="container">
        <div className="calendar-page">
          <Link className="item-link btn" to='/'><img src={Plus} alt="To editor button"/> </Link>
          {this.paintCalendar()}
        </div>
      </div>
    );
  }
}

export default Calendar;
