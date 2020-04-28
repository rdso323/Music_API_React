import React, { Component } from "react";
import "./App.css";
import Albums from "./components/Albums";
import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then(
        (result) => {
          this.setState({
            data: result.albums,
            isLoaded: true,
          });
        },
        (error) => {
          this.setState({
            isLoaded: false,
          });
        }
      );

    //this.setState({ executed: true });

    //var results = document.getElementById("results")

    //results = <p>this.state.data</p>
    // this.state.data.map((flight) => {
    //   console.log(flight.id)
    // })

    // console.log(origin)

    //console.log(this.state.data.id)
  }

  validator() {
    if (this.state.data != null) {
      return <p>We should have change</p>;
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("hiiiiii");
    //this.componentDidMount();
    console.log(this.state.data);
  };

  render() {
    return (
      <div className="App">
        <Search handleSubmit={this.handleSubmit} />
        <Albums data={this.state.data} />
        {this.validator()}
      </div>
    );
  }
}

export default App;
