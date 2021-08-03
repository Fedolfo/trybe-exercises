import React from 'react';

class Checkbox extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <div>
        <label>
          <input type="checkbox"
            required
            value={ value }
            onChange={ onChange }
          />
            Check!
        </label>
        <div>
          Por favor marque!
        </div>
      </div>
    );
  }
}

export default Checkbox;