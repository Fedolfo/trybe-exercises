import React, { Component } from "react";
import Checkbox from "./Checkbox";
import TextArea from "./TextArea";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      textoArea: "",
      inputTexto: "",
      inputTexto1: "",
      inputcheck: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  toggleChange = () => {
    this.setState({
      inputcheck: !this.state.inputcheck,
    });
  };

  submitHandler = (event) => {
    event.target.className += " was-validated";
    // multiple property validation could go here
    if (event.target.checkValidity()) {
      console.log("dispatch an action");
    }
  };

  render() {
    const { inputcheck, textoArea } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <fieldset>
            <h1>Select, text e inputs</h1>
            <fieldset>
              <TextArea value={textoArea} onChange={this.handleChange} />
              <label htmlFor="selectd">
                Seliciona algo:
                <select name="selecionador" id="selectd"></select>
              </label>
            </fieldset>
            <fieldset>
              <label htmlFor="forInputTexto">
                HeheBoy:
                <input
                  type="text"
                  name="inputTexto"
                  id="forInputTexto"
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="forInputTexto1">
                Sim?
                <input
                  type="text"
                  name="inputTexto1"
                  id="forInputTexto1"
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <Checkbox value={inputcheck} onChange={this.toggleChange} />
              </label>
              <label htmlFor="filesID">
                Files:
                <input type="file" id="filesID" />
              </label>
            </fieldset>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
