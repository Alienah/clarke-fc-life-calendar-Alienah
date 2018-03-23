import React from 'react';
import Calendar from './Calendar';
import { Link } from 'react-router-dom';

class Editor extends React.Component{
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
          <button onClick={this.props.addNewMood} className="btn btn--save" type="submit"><Link className="item-link" to='/calendar'>Guardar</Link></button>


          <Link className="item-link" to='/calendar'>
            <button className="btn btn--save" type="button">Cancelar</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Editor;
