import React from 'react';

class Form extends React.Component{
  render() {
    return (
      <div>
        <form className="edition__form">
          <div className="form__section">
            <label className="section__label">
              Fecha:
            </label>
            <input type="date" />
          </div>
          <div className="form__section">
            <label className="section__label">
              Estado:
            </label>
            <ul className="section__options">
              <li>
                <label className="section__label" for="smile">
                  <input type="radio" value="smile" id="smile" name="options"/> :)</label>
              </li>
              <li>
                <label className="section__label" for="sad">
                  <input type="radio" value="sad" id="sad" name="options"/> :(</label>
              </li>
            </ul>
          </div>
          <div className="form__section">
            <label className="section__label">
              Mensaje:
            </label>
            <input type="text" placeholder="¿Por qué es un buen día?" />
          </div>
          <button className="btn btn--save" type="submit">Guardar</button>
          <button className="btn btn--save" type="button">Cancelar</button>
        </form>
      </div>
    );
  }
}

export default Form;
