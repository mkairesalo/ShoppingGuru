import React, { Component } from "react";
import './tyyli.css';

class TuoteForm extends Component {
  state = { tuotteennimi: "", määrä:0, korissa: false};
  tuoteTallennus = e => {
    this.setState({ tuotteennimi: e.target.value });
  };
  maaraTallennus = e => {
    this.setState({ määrä: e.target.value });
  };
  laheta = e => {
    e.preventDefault();
    this.props.saveTuote(this.state);
    this.setState({ tuotteennimi: "", määrä: "" });
  };
  render() {
    return (
      <div align="center">
        <form onSubmit={this.laheta}>
          <table>
            <tbody>
              <tr>
                <td>Tuote:</td>
                <td>
                  <input value={this.state.tuotteennimi} onChange={this.tuoteTallennus}/>
                </td>
              </tr>
              <tr>
                <td>Määrä:</td>
                <td>
                  <input value={this.state.määrä} onChange={this.maaraTallennus}/>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                </tr>
              <tr>
                <td></td>
                <td >
                  <input className="button" type="submit" defaultValue="Lisää" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default TuoteForm;
