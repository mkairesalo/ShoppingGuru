import React, { Component } from "react";
import Koriyksikko from "./KoriYksikko";
import $ from "jquery";
import "./tyyli.css";

const apiurl = "/api/ostoslista";

class TuoteList extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  getToDos() {
    $.ajax({
      url: apiurl,
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ todos: data }, function() {
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  componentWillMount() {
    this.getToDos();
  }

  componentDidMount() {
    this.getToDos();
  }

  luoTuote(tuote, callback) {
    return fetch("/api/ostoslista", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tuote)
    }).then(function(response) {
      callback(response.status);
    });
  }

  poistaTuote(ostoid) {
    return fetch("api/ostoslista/" + ostoid, {
      method: "DELETE"
    });
  }
  //   päivitäTuote(ostoid) {
  //     return fetch("api/ostoslista/" + ostoid, {
  //       method: "PUT"
  //     });
  //   }

  koriTuote(ostoid) {
    return fetch("api/ostoslista/" + ostoid, {
      method: "PUT"
    });
  }

  newTuote = uusituote => {
    this.luoTuote(
      uusituote,
      function() {
        this.getToDos();
      }.bind(this)
    );
  };

  deleteTuote = poistettavanId => {
    this.poistaTuote(poistettavanId).then(
      function(response) {
        this.getToDos();
      }.bind(this)
    );
  };

  basketTuote = koritettavanId => {
    this.koriTuote(koritettavanId).then(
      function(response) {
        this.getToDos();
      }.bind(this)
    );
  };

  //   updateTuote = päivitettävänId => {
  //     this.päivitäTuote(päivitettävänId).then(
  //       function(response) {
  //         this.getToDos();
  //       }.bind(this)
  //     );
  //   };

  render() {
    return (
      <div className="TuoteList">
        {/* <TuoteForm saveTuote={this.newTuote} /> */}
        <Koriyksikko
          todos={this.state.todos}
          poisto={this.deleteTuote}
          kori={this.basketTuote}
          //   update={this.updateTuote}
        />
      </div>
    );
  }
}

export default TuoteList;
