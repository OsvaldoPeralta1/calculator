import React, { Component } from "react";
/* Los componentes de clase se componen asi:
    class App extends Component > render > return
*/
import Number from "./Number";
class AppContador extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <Number />
        </div>
      </div>
    );
  }
}
export default AppContador;
