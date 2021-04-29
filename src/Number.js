import React, { Component } from "react";

class Number extends Component {
  constructor(props) {
    super(props);
    this.state = { theNumber: 0 };

    this.Add = this.Add.bind(this);
    this.Substract = this.Substract.bind(this);
    this.Divide = this.Divide.bind(this);
    this.Reset = this.Reset.bind(this);
  }
  Add() {
    //this.setState((add) => ({ theNumber: add.theNumber + 1 }));
    this.setState({ theNumber: this.state.theNumber + 1 });
    /*Las llaves son para declarar un nuevo objeto > nuevo Objeto 
    > lectura de un valor de propiedad de un estado
    > sumarle 1 */

    /*Para alterar el valor del estado,se tiene que declarar un nuevo objeto 
    con las nuevas propiedades y sus nuevos valores */
  }
  Substract() {
    //this.setState((substracr) => ({ theNumber: substracr.theNumber - 2 }));
    this.setState(function (state) {
      return { theNumber: state.theNumber - 2 };
    });
    /* Esta sintaxis siempre asegura que uses el valor mas actual del state*/
  }
  Divide() {
    this.setState((divide) => ({ theNumber: divide.theNumber / 3 }));
  }
  Reset() {
    this.setState({ theNumber: 0 });
  }
  render() {
    return (
      <div className="flex-row my-5">
        <div className="col-sm d-flex justify-content-center">
          <button className="btn-dark rounded mr-2" onClick={this.Add}>
            Add
          </button>
          <button className="btn-dark rounded mr-2" onClick={this.Substract}>
            Substract
          </button>
          <button className="btn-dark rounded mr-2" onClick={this.Divide}>
            Divide
          </button>
          <button className="btn-dark rounded mr-2" onClick={this.Reset}>
            Reset
          </button>
        </div>
        <div className="col-sm mt-4 flex-row d-flex justify-content-center align-self-center">
          <h2>{this.state.theNumber}</h2>
        </div>
      </div>
    );
  }
}
export default Number;
