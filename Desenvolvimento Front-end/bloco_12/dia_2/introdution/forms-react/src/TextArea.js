import React from "react";

class TextArea extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <div>
        <label htmlFor="rolaqueta">
          Texto:
          <textarea
            name="textoArea"
            id="rolaqueta"
            cols="30"
            minLength="3"
            required
            rows="10"
            value={value}
            onChange={onChange}
          ></textarea>
        </label>
        <div className="invalid-feedback">
          text is required with minimum length of 3 and max of 400
        </div>
      </div>
    );
  }
}

export default TextArea;
