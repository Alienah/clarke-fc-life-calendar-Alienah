import React from 'react';

class Form extends React.Component{
  render() {
    return (
      <div>
        <form>
          <label>
            Fecha
          </label>
          <input type="date" />
        </form>
      </div>
    );
  }
}

export default Form;
