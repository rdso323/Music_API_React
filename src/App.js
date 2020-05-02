import React, { Component } from "react";
import "./App.css";
import Albums from "./components/Albums";
import Search from "./components/Search";
import Photos from "./components/Photos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import getAlbums from "./actions/StoreAlbums";
import {connect} from 'react-redux'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //data_albums: null,
      data_users: null,
      data_photos: null,
      isLoaded: false,
    };
  }

  fetchData() {
    if (!this.state.isLoaded) {
      fetch("https://jsonplaceholder.typicode.com/albums")
        .then((res) => res.json())
        .then(result => this.props.storeAlbums(result))

      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data_users) => this.setState({ data_users }));

      this.setState({ isLoaded: true });
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
    //console.log(this.state.data_albums);
    console.log(this.state.data_users);
    console.log(this.state.data_photos);
  };

  render() {
    const {data_albums} = this.props;
    return (
      <Router>
        <Switch>
          <div className="App">
            <Route exact path="/">
              <Search handleSubmit={this.handleSubmit} />
              <Albums
                data_albums={data_albums}
                data_users={this.state.data_users}
              />
              {this.validator()}
            </Route>
            <Route path="/pics/:topic" component={Photos}></Route>
          </div>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      data_albums: state.data_albums
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeAlbums: (list) => {
      dispatch(getAlbums(list));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
