import React from 'react';

class Form extends React.Component{
  constructor (props) {
    super(props);

    this.handleOnChangeDate = this.handleOnChangeDate.bind(this);
    this.handleOnClickMood = this.handleOnClickMood.bind(this);
    this.handleOnChangeMsg = this.handleOnChangeMsg.bind(this);
    this.add = this.add.bind(this);

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

  add (e) {
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
      moodsOfDays: moodsAdded
    })
    console.log(this.state.list);
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

  render() {
    console.log(this.state.moodsOfDays);
    return (
      <div>
        <form className="edition__form">
          <div className="form__section">
            <label className="section__label">
              Fecha:
            </label>
            <input type="date" onChange={this.handleOnChangeDate}/>
          </div>
          <div className="form__section">
            <label className="section__label">
              Estado:
            </label>
            <ul className="section__options">
              <li>
                <label className="section__label" htmlFor="smile">
                  <input type="radio" value="smile" id="smile" name="options" onClick={this.handleOnClickMood}/> :)</label>
              </li>
              <li>
                <label className="section__label" htmlFor="sad">
                  <input type="radio" value="sad" id="sad" name="options" onClick={this.handleOnClickMood}/> :(</label>
              </li>
            </ul>
          </div>
          <div className="form__section">
            <label className="section__label">
              Mensaje:
            </label>
            <input type="text" placeholder="¿Por qué es un buen día?" onChange={this.handleOnChangeMsg}/>
          </div>
          <button onClick={this.add} className="btn btn--save" type="submit">Guardar</button>
          <button className="btn btn--save" type="button">Cancelar</button>
        </form>
      </div>
    );
  }
}

export default Form;
