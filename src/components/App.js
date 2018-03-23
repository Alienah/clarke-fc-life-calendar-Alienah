import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Editor from './Editor';
import Calendar from './Calendar';

class App extends Component {
  constructor (props) {
    super(props);

    this.handleOnChangeDate = this.handleOnChangeDate.bind(this);
    this.handleOnClickMood = this.handleOnClickMood.bind(this);
    this.handleOnChangeMsg = this.handleOnChangeMsg.bind(this);
    this.addNewMood = this.addNewMood.bind(this);

    this.state = {
      moodsOfDays: [],
      moodsAdded:[],
      dateValue: '',
      moodValue: '',
      msgValue: '',
    }
  }

  componentWillMount () {
    localStorage.getItem('jsonData') && this.setState({
      moodsOfDays: JSON.parse(localStorage.getItem('jsonData'))
    })
  }

  componentWillUpdate(){
    let jsonData = [];
    jsonData = this.state.moodsAdded;

    localStorage.setItem('jsonData', JSON.stringify(jsonData) );
  }

  handleOnChangeDate (e) {
    const dateValue = e.target.value;
    this.setState({
      dateValue: dateValue
    })
  }

  handleOnClickMood (e) {
    const moodValue = e.target.value;
    this.setState({
      moodValue: moodValue
    })
  }

  handleOnChangeMsg (e) {
    const msgValue = e.target.value;
    this.setState({
      msgValue: msgValue
    })
  }

  addNewMood (e) {
    e.preventDefault();
    let moodsAdded = this.state.moodsAdded;

    moodsAdded.push(
      {
        date: this.state.dateValue,
        mood: this.state.moodValue,
        message: this.state.msgValue
      }
    )
    this.setState({
      moodsOfDays: moodsAdded,
      msgValue: ''
    })
  }

  render() {
    return (
      <div className="App">
        <header className="app__header">
          <h1 className="app__title">¿Qué tal tu día?</h1>
        </header>
        <Switch>
          <Route exact path='/' render={() =>
            <Editor
              moodsOfDays = {this.state.moodsOfDays}
              moodsAdded = {this.state.moodsAdded}
              dateValue = {this.state.dateValue}
              moodValue = {this.state.moodValue}
              msgValue = {this.state.msgValue}
              handleOnChangeDate = {this.handleOnChangeDate}
              handleOnClickMood = {this.handleOnClickMood}
              handleOnChangeMsg = {this.handleOnChangeMsg}
              addNewMood = {this.addNewMood}
            />
          }/>
          <Route path='/calendar' render={(props) =>
            <Calendar
              moodsOfDays = {this.state.moodsOfDays}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
