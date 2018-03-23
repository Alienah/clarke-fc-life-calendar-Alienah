import React from 'react';
import Calendar from './Calendar';

class Editor extends React.Component{
  
  paint () {
    return (
    <ul className="pokemon__list">
      {
        this.props.moodsOfDays.sort(function(a,b) {
        return a.date - b.date;}).map(
          (mood) =>
            <li key={mood.date}>
              <Calendar
                date={mood.date}
                mood={mood.mood}
                message= {mood.message}
              />
            </li>
        )
      }
    </ul>)
  }

  render() {

    return (
      <div>
        <form className="edition__form">
          <div className="form__section">
            <label className="section__label">
              Fecha:
            </label>
            <input type="date" onChange={this.props.handleOnChangeDate}/>
          </div>
          <div className="form__section">
            <label className="section__label">
              Estado:
            </label>
            <ul className="section__options">
              <li>
                <label className="section__label" htmlFor="smile">
                  <input type="radio" value="smile" id="smile" name="options" onClick={this.props.handleOnClickMood}/> :)</label>
              </li>
              <li>
                <label className="section__label" htmlFor="sad">
                  <input type="radio" value="sad" id="sad" name="options" onClick={this.props.handleOnClickMood}/> :(</label>
              </li>
            </ul>
          </div>
          <div className="form__section">
            <label className="section__label">
              Mensaje:
            </label>
            <input type="text" placeholder="¿Por qué es un buen día?" onChange={this.props.handleOnChangeMsg}/>
          </div>
          <button onClick={this.props.addNewMood} className="btn btn--save" type="submit">Guardar</button>
          <button className="btn btn--save" type="button">Cancelar</button>
        </form>
        {this.paint()}
      </div>
    );
  }
}

export default Editor;
