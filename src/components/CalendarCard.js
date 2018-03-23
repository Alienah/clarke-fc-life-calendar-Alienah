import React from 'react';
import Smile from '../images/smile.png';
import Sad from '../images/sad.png';

class CalendarCard extends React.Component {
  render () {
    return (
      <div>
        <div className="face-image-container" title={this.props.date}>{this.props.mood === 'smile'? <img className="face-image" src={Smile} alt={this.props.mood}/> : <img className="face-image" src={Sad} alt={this.props.mood}/>} 
        </div>

      </div>
    );
  }
}

export default CalendarCard;
