import React from 'react';

class Form extends React.Component{
  constructor (props) {
    super(props);

    this.handleOnChangeDate = this.handleOnChangeDate.bind(this);
    this.handleOnClickState = this.handleOnClickState.bind(this);
    this.handleOnChangeMsg = this.handleOnChangeMsg.bind(this);

    this.state = {
      dateValue: '',
      stateValue: '',
      msgValue: ''
    }
  }

  handleOnChangeDate (e) {
    const dateValue = e.target.value;

    this.setState({
      dateValue: dateValue
    })

  }

  handleOnClickState (e) {
    const stateValue = e.target.value;

    this.setState({
      stateValue: stateValue
    })

  }

  handleOnChangeMsg (e) {
    const msgValue = e.target.value;

    this.setState({
      msgValue: msgValue
    })

  }

  render() {

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
                  <input type="radio" value="smile" id="smile" name="options" onClick={this.handleOnClickState}/> :)</label>
              </li>
              <li>
                <label className="section__label" htmlFor="sad">
                  <input type="radio" value="sad" id="sad" name="options" onClick={this.handleOnClickState}/> :(</label>
              </li>
            </ul>
          </div>
          <div className="form__section">
            <label className="section__label">
              Mensaje:
            </label>
            <input type="text" placeholder="¿Por qué es un buen día?" onChange={this.handleOnChangeMsg}/>
          </div>
          <button className="btn btn--save" type="submit">Guardar</button>
          <button className="btn btn--save" type="button">Cancelar</button>
        </form>
      </div>
    );
  }
}

export default Form;
