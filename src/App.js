import React, { Component } from "react";
import "./App.css";
import Albums from "./components/Albums";
import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data_albums: null,
      data_users: null,
      isLoaded: false,
    };
  }

  fetchData() {
    if(!this.state.isLoaded){
      fetch("https://jsonplaceholder.typicode.com/albums")
        .then((res) => res.json())
        .then((data_albums) => this.setState({ data_albums }));

      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data_users) => this.setState({ data_users }));
     
      this.setState({isLoaded:true})
    
    }
      //.then((data) => this.setState({ data }));
      //   (result) => {
      //     this.setState({
      //       data: result,
      //       isLoaded: true,
      //     });
      //   },
      //   (error) => {
      //     this.setState({
      //       isLoaded: false,
      //     });
      //   }
      // );

    //this.setState({ executed: true });

    //var results = document.getElementById("results")

    //results = <p>this.state.data</p>
    // this.state.data.map((flight) => {
    //   console.log(flight.id)
    // })

    // console.log(origin)

    //console.log(this.state.data.id)
  }

  fetchUsers(){
    
  }

  validator() {
    if (this.state.data != null) {
      return <p>We should have change</p>;
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("hiiiiii");
    this.fetchData();
    //this.fetchUsers();
    console.log(this.state.data_albums);
    console.log(this.state.data_users);
  };

  render() {
    return (
      <div className="App">
        <Search handleSubmit={this.handleSubmit} />
        <Albums data_albums={this.state.data_albums} data_users={this.state.data_users} />
        {this.validator()}
      </div>
    );
  }
}

export default App;
